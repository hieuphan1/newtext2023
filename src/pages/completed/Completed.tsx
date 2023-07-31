import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Flex, Spacer, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { TodoEntity } from "../../types/models/todo";
import styles from "../todolist/Todo.box.module.scss"
import moment from "moment";

const Completed = () => {
    const newData = useSelector((state: RootState) => state.todos.completedTodo);
    const customCheckboxStyles = {
        transform: 'scale(2)', // Tăng kích thước nút checkbox lên 1.5 lần
    };




    return (
        <Flex
            fontSize={{ base: '17px', md: '30px', lg: '30px' }}
            direction="column"
            flexGrow={1}
        >
            <Box fontFamily="monospace"><h1 style={{ fontSize: "200%", fontWeight: "bolder", color: "#4294ed" }}>Completed</h1></Box>
            {newData?.map((value: TodoEntity) => {
                return (
                    <Flex
                        fontSize={{ base: '5', md: '10px', lg: '20px' }}
                        bg="#C6E2FF"
                        className={styles.containerBox}
                        key={value.id}
                    >

                        <Checkbox border={2} style={{ marginRight: "3%", marginLeft: "1%" }} sx={customCheckboxStyles} colorScheme='blue' isChecked={value.status} defaultChecked>
                        </Checkbox>
                        <Accordion flex={1} allowToggle>
                            <AccordionItem>
                                <AccordionButton >
                                    <Flex direction='column' fontSize={20} overflowWrap="break-word" alignItems="flex-start">
                                        <Text> {value.title}</Text>
                                        <Flex fontSize={14}>
                                            <Text color="red.400">{value.category.name} &nbsp;</Text>
                                            <Text color="blue.200" >{value.priority} &nbsp;</Text>
                                            <p>{moment(value.created_at).format("MMMM Do YYYY, h:mm:ss a")}</p>
                                        </Flex>
                                        <Text>Completed at: {value.today_at}</Text>

                                    </Flex>
                                    <Spacer />
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {value.description}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                    </Flex>
                )
            })}

        </Flex>
    );
}

export default Completed;