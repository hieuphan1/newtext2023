import { Box, Button, Divider, Flex, StepSeparator } from "@chakra-ui/react";
import CpnDivider from "./CpnDivider";
import { useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";

interface Props {
    data: {
        title: string,
        description: string

    }[],
}
const CpnStepper = ({ data }: Props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    const handleNext = () => {
        setClick(true)
    }
    const handlePrevious = () => {
        setClick(false)
    }
    return (
        <Flex direction='column'>
            <Flex>

                {data.map((item, index) => {
                    return (
                        <Flex alignItems='center' justifyItems='center' flex={1}>
                            <Flex marginRight={2} justifyContent='center' alignItems='center' borderRadius='50%' width={10} border='2px' borderColor='gray.300' height={10} bg={click ? 'blue.300' : ''}>{click ? <CheckIcon /> : index + 1}</Flex>
                            <Flex marginRight={2} fontSize='17px' direction='column'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Flex>
                            {/* <CpnDivider width={6} h={8} /> */}
                            {index < 2 && <Flex color={click ? 'blue.300' : 'gray.300'} width='65%' border='1px'></Flex>}

                        </Flex>
                    )
                })}


            </Flex >
            <Flex width="75%" flexDirection='row-reverse' justifyContent='space-between'>
                <Flex>
                    <Button onClick={handleNext}>Next</Button>
                </Flex>

                <Flex>
                    <Button onClick={handlePrevious}>Previous</Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default CpnStepper;