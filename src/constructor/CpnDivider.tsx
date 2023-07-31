import { Divider, DividerProps, Flex, Text } from "@chakra-ui/react";


interface CpnDividerProps extends DividerProps {
    name?: string
}
const CpnDivider = ({ name, ...rest }: CpnDividerProps) => {

    if (name) {
        return (
            <Flex direction="column">
                <Divider />
                <Text textAlign="center">{name}</Text>
                <Divider />
            </Flex>
        )
    }

    return (
        <Divider {...rest} />
    );
}

export default CpnDivider;