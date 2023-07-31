import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const NewNumberInput = () => {
    const [input, setInput] = useState<number>(0);

    const handleUp = () => {
        return setInput(input + 1)
    }
    const handleDown = () => {
        return setInput(input - 1)
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let y = Number(e.target.value);
        // ko cho nhap string
        // kiem tra so nhap vao co phai number hay ko
        // typeof value === 'number'

        // khong nhan NaN
        // Neu gia tri NaN giong gia tri y thi chay setInput
        // Neu y khac NaN va y la number moi cho nhap
        if (!isNaN(y) && typeof y === 'number') {
            setInput(y)
        }
    }

    return (
        <Flex border="2px" width="150px" justifyItems='center' alignItems='center'>
            <InputGroup>
                <Input type="number" onChange={(e) => handleOnChange(e)} value={input} />
                <InputRightElement>
                    <Flex direction='column'>
                        <TriangleUpIcon onClick={handleUp} boxSize={6} />
                        <TriangleDownIcon onClick={handleDown} boxSize={6} />
                    </Flex>
                </InputRightElement>
            </InputGroup>

        </Flex>
    );
}

export default NewNumberInput;