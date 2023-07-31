import { Box, Button, ButtonGroup, Flex, FormControl, Spacer, useDisclosure } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/todos/slice";
import { TodoEntity } from "../../types/models/todo";
import { AppDispatch } from "../../redux/root-store";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../../redux/todos/thunk";
import { SOURCES_TODO } from "../../redux/todos/entity-config";
import React from "react";
import TodoBox from "./TodoBox";
import AddTodoModal from "./AddTodoModal";
import { AddIcon, ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
import SearchTodo from "./SearchTodo";
import { useDebounce } from "../../hooks/useDebouce";

const TodoListPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const data: any = useSelector(getTodos);
    const [dataEntity, setDataEntity] = useState<TodoEntity | undefined>();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSorted, setIsSorted] = useState(false);

    const [searchParams1, setSearchParams1] = useSearchParams(); // Use useSearchParams hook
    const searchParams = searchParams1.get("search") || '';
    const [searchQuery, setSearchQuery] = useState(searchParams);

    const debouncedValue = useDebounce<string>(searchQuery, 1000)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }
    useEffect(() => {
        dispatch(fetchTodos({ source: SOURCES_TODO.TODOS_PAGE }));
        setSearchParams1({
            search: debouncedValue
        }, { replace: true })

    }, [dispatch, debouncedValue, setSearchParams1]);

    const handleSubmit = (input: TodoEntity) => {
        dispatch(addTodo({ data: input }))
    }

    const handleUpdate = (input: TodoEntity) => {
        dispatch(updateTodo({ id: input.id, data: input }))
    }

    const handleOnEdit = (input: TodoEntity) => {
        onOpen();
        setDataEntity(input);
    }

    const handleDelete = (id: number) => {
        dispatch(deleteTodo({ id }))
    }

    const handleOnclose = () => {
        onClose();
        setDataEntity(undefined)
    }

    const handleArrange = () => {
        setIsSorted(!isSorted)
    }

    return (

        <Flex fontSize={{ base: '12px', md: '20px', lg: '30px' }} direction="column" flex={1}>
            <Flex fontFamily="monospace"><h1 style={{ fontSize: "200%", fontWeight: "bolder", color: "#4294ed" }}>ToDo Tasks</h1></Flex>
            <FormControl>
                <AddTodoModal isOpen1={isOpen} onClose1={handleOnclose} update={handleUpdate} submit={handleSubmit} data1={dataEntity} />
                <Flex alignItems="center">
                    <Box w='70px' h='10,5'>
                        <ButtonGroup variant='outline' spacing='6'>
                            <Button fontWeight="medium" colorScheme='teal' variant='outline' ml={2} onClick={onOpen}><AddIcon />&nbsp;Add New Task</Button>
                            <Button onClick={handleArrange} colorScheme='blue'>{isSorted ? <ArrowUpIcon /> : <ArrowDownIcon />}&nbsp;Arrange {isSorted ? `false` : `true`}</Button>
                        </ButtonGroup>
                    </Box>
                    <Spacer />
                    <SearchTodo searchParam={searchQuery} handleSearch={handleChange} />
                    <Spacer />
                    <Box w='170px' h='10,5'>
                    </Box>
                </Flex>

                <Flex direction="column">
                    {data.data
                        .sort((a: TodoEntity, b: TodoEntity) => {
                            return (
                                isSorted ? a.priority - b.priority : b.priority - a.priority
                            )
                        })
                        .filter((value: TodoEntity) => {
                            return debouncedValue.toLowerCase() === '' ? value : value.title.toLowerCase().includes(debouncedValue.toLowerCase());
                        })
                        .map((value: TodoEntity) => {
                            return (
                                <TodoBox key={value.id} onEdit={handleOnEdit} onDelete={handleDelete} dataTodo={value} />
                            )
                        })}
                </Flex>
            </FormControl>
        </Flex >
    );
}

export default TodoListPage;