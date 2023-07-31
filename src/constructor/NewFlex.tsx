import { Flex } from "@chakra-ui/react";

const NewFlex = () => {
    return (
        <Flex flexWrap='wrap' direction='row' marginBottom={4}>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                marginRight={4}
                marginBottom={4}
            >
                <Flex
                    height='40px'
                    width='40px'
                    border='1px'
                    margin='3'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >
                    1
                </Flex>

            </Flex>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyContent='center'
                marginRight={4}
            >
                <Flex
                    marginTop='3'
                    height='40px'
                    width='40px'
                    border='1px'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >2</Flex>
            </Flex>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyContent='flex-end'
                marginRight={4}

            >

                <Flex
                    margin='3'
                    height='40px'
                    width='40px'
                    border='1px'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >3</Flex>
            </Flex>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyItems='center'
                alignItems='center'
                marginRight={4}
            >
                <Flex
                    height='40px'
                    width='40px'
                    border='1px'
                    margin='3'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >
                    4
                </Flex>

            </Flex>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyContent='center'
                justifyItems='center'
                alignItems='center'
                marginRight={4}
            >

                <Flex

                    height='40px'
                    width='40px'
                    border='1px'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >5</Flex>
            </Flex>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyItems='center'
                alignItems='center'
                justifyContent='flex-end'
                marginRight={4}
            >

                <Flex
                    margin='3'
                    height='40px'
                    width='40px'
                    border='1px'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >6</Flex>
            </Flex>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyItems='center'
                alignItems='flex-end'
                marginRight={4}

            >
                <Flex
                    height='40px'
                    width='40px'
                    border='1px'
                    margin='3'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >
                    7
                </Flex>

            </Flex >
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyContent='center'
                justifyItems='center'
                alignItems='flex-end'
                marginRight={4}
            >

                <Flex
                    marginBottom={4}
                    height='40px'
                    width='40px'
                    border='1px'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >8</Flex>
            </Flex>
            <Flex
                height='200px'
                width='200px'
                border='1px'
                justifyItems='center'
                alignItems='flex-end'
                justifyContent='flex-end'
            >

                <Flex
                    margin='3'
                    height='40px'
                    width='40px'
                    border='1px'
                    justifyContent='center'
                    justifyItems='center'
                    alignItems='center'
                >9</Flex>
            </Flex>
        </Flex >


    );
}

export default NewFlex;