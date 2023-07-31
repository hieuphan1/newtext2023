import { Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    handleSave: (item: Date | null) => void;
}
const DatePickerInputModal = ({ isOpen, onClose, handleSave: onSave, ...rest }: Props) => {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const handleOnClick = () => {
        onSave(startDate)
    }


    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Date Picker</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                inline
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleOnClick} colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default DatePickerInputModal;