import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
    label?: string;
    color?: string;
    size?: string;
    children?: React.ReactNode;
}
const CpnTooltip = ({ label = 'Tag Here', color = 'gray.300', size = "15px", children }: Props) => {
    const [isHover, setIsHover] = useState(false);
    console.log("hover", isHover)
    return (
        <>
            <Flex
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <Text paddingRight={1} paddingLeft={1} fontWeight='medium' fontSize={size} bg={color}>{children}</Text>
            </Flex>
            {isHover && (
                <Flex
                >
                    <Text
                        marginTop={2}
                        position="absolute"
                        zIndex="1"
                        paddingRight={1} paddingLeft={1}
                        color='white'
                        fontSize="16px"
                        bg='blackAlpha.800'>{label}
                    </Text>
                </Flex>
            )}
        </>

    );
}

export default CpnTooltip;