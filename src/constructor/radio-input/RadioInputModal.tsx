import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useState } from "react";


interface props {
    isOpen: boolean;
    onClose: () => void;
    handleSave: (item: string) => void;
    dataOption?: { id: number, value: any, label: string }[];


}
const RadioInputModal = ({ isOpen, onClose, handleSave, dataOption, ...rest }: props) => {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [radio, setRadio] = useState('');

    const onClickSave = () => {
        handleSave(radio);
        onClose();
    }

    const onChangeRadio = (value: string) => {
        setRadio(value)
    }

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Radio</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <RadioGroup onChange={(nextValue) => { onChangeRadio(nextValue) }}>
                        <Stack direction='row'>
                            {dataOption?.map((item) => {
                                return (
                                    <Radio value={item.value.toString()} >{item.label}</Radio>
                                )
                            })}

                        </Stack>
                    </RadioGroup>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClickSave} colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default RadioInputModal;