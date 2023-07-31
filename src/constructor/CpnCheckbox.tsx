import { CheckIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    disabled?: boolean;
    defaultChecked?: boolean;
    color?: string;
    size?: string;
    iconSize?: string;
    invalid?: boolean;
    text?: string;
    containerProps?: FlexProps;
    checkBoxProps?: FlexProps;
}
const CpnCheckbox = ({ disabled, defaultChecked, color = "blue.300", size = '20px', iconSize = '15px', invalid, text = "Checkbox", containerProps, checkBoxProps, ...rest }: Props) => {
    const [check, setCheck] = useState(defaultChecked);

    const handleCheckbox = () => {
        if (disabled) {
            return;
        }
        setCheck(!check)
    }

    const getBgColor = () => {
        // disabled ? "gray.300" : null || check ? color : "white"
        if (disabled) {
            return "gray.300"
        }
        if (check) {
            return color
        }

        return "white"
    }

    const getBdColor = () => {
        if (disabled) {
            return ""
        }
        return "black"
    }

    // useEffect(() => {
    //     if (defaultChecked) {
    //         setCheck(true)
    //     }
    // }, [defaultChecked])
    return (
        <>
            <Flex _hover={{ cursor: disabled ? "not-allowed" : "pointer" }} color={disabled ? "gray.400" : ''} justifyItems='center' alignItems='center' {...containerProps}>
                <Flex
                    _hover={{ borderColor: getBdColor() }}
                    onClick={handleCheckbox}
                    height={size}
                    width={size}
                    border='2px'
                    borderColor={invalid ? "red" : ""}
                    bg={getBgColor()}
                    {...checkBoxProps}
                >
                    {check ? <CheckIcon color='white' boxSize={iconSize} /> : null}
                </Flex>
                <Text marginLeft={3}>{text}</Text>
            </Flex >
        </>
    );
}

export default CpnCheckbox;