import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { TodoEntity } from "../../types/models/todo";
import moment from "moment";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Flex, Spacer, Spinner, Text } from "@chakra-ui/react";
import styles from "./Todo.box.module.scss"
import { useState } from "react";
import { AppDispatch } from "../../redux/root-store";
import { useDispatch } from "react-redux";
import { addCompleted } from "../../redux/todos/slice";
import { helper } from "../../utils/helpers/helper";

interface props {
    onDelete: (id: number) => void
    dataTodo?: TodoEntity,
    onEdit: (input: TodoEntity) => void
}

const TodoBox = ({ onEdit, onDelete, dataTodo = {} as TodoEntity }: props) => {
    const [isChecked, setIsChecked] = useState(dataTodo.status);
    const [isDeleting, setIsDeleting] = useState(false);
    const dispatch: AppDispatch = useDispatch();

    const customCheckboxStyles = {
        transform: 'scale(2)', // Tăng kích thước nút checkbox lên 1.5 lần
    };

    const deleteF = () => {
        setIsDeleting(true);
        onDelete(dataTodo.id)
        helper.toast.fire({
            icon: 'success',
            title: 'delete'
        })
    }

    const handleEditClick = () => {
        onEdit(dataTodo);
    };

    const handleCheckboxChange = () => {
        const today_at = moment().format("MMMM Do YYYY, h:mm:ss a");
        if (!isChecked) {
            setIsDeleting(true);
            setTimeout(() => {
                setIsChecked(!isChecked);
                dispatch(addCompleted({ ...dataTodo, today_at }));
                onDelete(dataTodo.id);
                helper.toast.fire({
                    icon: 'success',
                    title: 'delete'
                });
            }, 1200);
        }
    };

    return (

        <Flex fontSize={{ base: '5', md: '10px', lg: '20px' }}
            className={styles.containerBox}
            flex={1}
            flexGrow={1}
            style={{
                backgroundColor: isDeleting ? "#C6E2FF" : "#E8E8E8", // Thay đổi màu nền của box tổng
                transition: "background-color 0.5s", // Thêm transition CSS để tạo hiệu ứng mượt mà
            }}>
            <Flex className={styles.flexOne} flex={1}>
                <Checkbox border={2} style={{ marginRight: "3%", marginLeft: "1%" }} sx={customCheckboxStyles} colorScheme='blue' onChange={handleCheckboxChange} isChecked={isChecked} disabled={isDeleting}>
                </Checkbox>
                <Accordion flex={1} allowToggle>
                    <AccordionItem>
                        <AccordionButton >
                            <Flex direction='column' fontSize={20} overflowWrap="break-word" alignItems="flex-start">
                                <Text> {dataTodo.title}</Text>
                                <Flex fontSize={14}>
                                    <Text color="red.400">{dataTodo.category.name} &nbsp;</Text>
                                    <Text color="blue.200" >{dataTodo.priority} &nbsp;</Text>
                                    <p>{moment(dataTodo.created_at).format("MMMM Do YYYY, h:mm:ss a")}</p>
                                </Flex>
                                {isDeleting ? (
                                    <Flex alignItems="center">
                                        <Spinner size="md" color="red.500" mr={2} />
                                        <Text color="blue.400" fontSize="sm">
                                            Moving to Completed...
                                        </Text>
                                    </Flex>
                                ) : null}
                            </Flex>
                            <Spacer />
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            {dataTodo.description}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Flex alignItems="flex-end">
                    <Box flexShrink={0} marginRight="10px">
                        <Button colorScheme='orange' onClick={handleEditClick}><EditIcon /><span style={{ marginRight: "8px" }}></span>Edit</Button>
                    </Box>
                    <Box flexShrink={0}>
                        <Button colorScheme='red' onClick={deleteF}><DeleteIcon /><span style={{ marginRight: "8px" }}></span>Delete</Button>
                    </Box>
                </Flex>
            </Flex>
        </Flex>

    );
}

export default TodoBox;

