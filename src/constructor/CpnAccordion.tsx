import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";


const CpnAccordion = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [check, setCheck] = useState(false);

    const handleonToggle = () => {
        onToggle()
        setCheck(!check)
    }

    return (
        <>
            <Flex fontSize={20} _hover={{ bg: 'gray.300' }} alignItems='center' justifyItems='center' onClick={handleonToggle} >
                Section 1 title
                <Spacer />
                <Flex direction='column'>
                    {check ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Flex>
            </Flex>
            {check && (
                <Box
                    fontSize={20}
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
            )}
            {/* <Collapse in={isOpen} animateOpacity>
                <Box
                    fontSize={20}
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
            </Collapse> */}
        </>
    );
}

export default CpnAccordion;