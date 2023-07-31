import { Flex, FlexProps } from "@chakra-ui/react";

interface Props extends FlexProps {
    value?: string;
    color?: string;
    width?: string;
    size?: number;

}
const CpnProgress = ({ value = '70%', color = 'blue.300', size = 4, width = '100%', ...rest }: Props) => {
    return (
        <Flex height={size} bg='gray.200' width={width} {...rest}>
            <Flex height={size} width={value} bg={color} />
        </Flex>
    );
}

export default CpnProgress;