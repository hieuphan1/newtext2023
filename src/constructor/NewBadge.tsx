import { Flex, Text } from "@chakra-ui/react";

interface Props {
    text?: string;
    color?: string;
    size?: string;
    children?: React.ReactNode;
}
const NewBadge = ({ text = 'demo', color = 'gray.300', size = "15px", children }: Props) => {
    return (

        <Flex   >
            <Text paddingRight={1} paddingLeft={1} fontWeight='medium' fontSize={size} bg={color}>{children}</Text>
        </Flex>
    );
}

export default NewBadge;