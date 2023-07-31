import { Input, InputProps, useDisclosure } from "@chakra-ui/react";
import DatePickerInputModal from "./DatePickerInputModal";
import { useState } from "react";
import moment from "moment";

interface Props extends InputProps {
    onSaveDatePicker: (item: Date | null) => void
}
const DatePickerInput = ({ onSaveDatePicker, ...rest }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [input, setInput] = useState<{ date: Date | null }>({
        date: null
    });

    const handleSave = (item: Date | null) => {
        setInput({
            date: item
        })
        onSaveDatePicker(item)
        onClose()
    }

    const defaultInput = moment().format("MMMM Do YYYY, h:mm:ss a");;

    return (
        <>
            <Input
                onClick={onOpen}
                value={input.date ? input.date.toLocaleDateString() : ""}
                placeholder={defaultInput}
                {...rest}
            />
            <DatePickerInputModal isOpen={isOpen} onClose={onClose} handleSave={handleSave} />
        </>
    );
}

export default DatePickerInput;