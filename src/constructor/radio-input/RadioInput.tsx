import { Input, InputProps } from "@chakra-ui/react";
import { useState } from "react";
import RadioInputModal from "./RadioInputModal";
interface radioInputProps extends InputProps {
    onOpen: () => void;
    isOpen: boolean;
    onClose: () => void;
    onSave: (item: string) => void;
    newData?: { id: number, value: any, label: string }[];

}
const RadioInput = ({ onOpen, isOpen, newData, onSave, onClose, ...rest }: radioInputProps) => {
    const [input, setInput] = useState({
        radio: ''
    })

    const handleSave = (item: string) => {
        setInput({
            radio: item
        })
        onSave(item)
    }

    return (
        <>
            <Input value={input.radio} onClick={onOpen} placeholder='Radio' {...rest} />
            <RadioInputModal isOpen={isOpen} onClose={onClose} handleSave={handleSave} dataOption={newData} />

        </>
    );
}

export default RadioInput;