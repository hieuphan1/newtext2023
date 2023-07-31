import { Alert, AlertIcon, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TodoEntity } from "../../types/models/todo";
import { useInput } from "../../hooks/useInput";
import moment from "moment";
import CpnDatepicker from "../../constructor/CpnDatepicker";
import 'alertifyjs/build/css/alertify.min.css';
import CategorySelect from "../../components/CategorySelect";


interface props {
    submit: (input: TodoEntity) => void,
    update: (input: TodoEntity) => void,
    isOpen1: boolean,
    onClose1: () => void,
    data1?: TodoEntity | undefined
}

const AddTodoModal = ({ isOpen1, onClose1, submit, update, data1 = {} as TodoEntity }: props) => {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const { inputs, setInputs, resetInput, validation } = useInput(
        {
            id: data1.id,
            title: data1.title,
            description: data1.description,
            category: {
                id: data1.category?.id,
                name: data1.category?.name,
            },
            priority: data1.priority,
            status: data1.status,
            created_at: data1.created_at || new Date(),
            today_at: data1.today_at || null
        },
        {
            rules: {
                title: { presence: true },
                created_at: { presence: true },
                description: { presence: true },
            }
        }
    )

    useEffect(() => {
        setInputs({
            id: data1.id,
            title: data1.title,
            description: data1.description,
            created_at: data1.created_at || Date(),

        })
    }, [data1.created_at, data1.description, data1.id, data1.title, setInputs])

    const handleSubmit = () => {
        if (validation.getErrors()) {
            return
        }
        inputs.id ? update(inputs) : submit(inputs);
    }

    const handleDateChange = (date: Date) => {
        setInputs({
            created_at: date
        })
    }

    const handleCategoryChange = (category: string) => {
        setInputs({
            category: {
                name: category
            }
        })
    }

    const handleOnClose = () => {
        onClose1();
        resetInput();
    }


    // const ExampleCustomInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(({ value, onClick }, ref) => (
    //     <Input className="example-custom-input" type="text" value={value} onClick={onClick} ref={ref} />
    // ));

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen1}
            onClose={handleOnClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="#4294ed" fontFamily="monospace" fontWeight="semibold">{inputs.id ? "Edit Todo" : "Add Todo"}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Alert status='success'>
                        <AlertIcon />
                        Data uploaded to the server. Fire on!
                    </Alert>
                    <FormControl>
                        <FormLabel
                        >Title</FormLabel>
                        <Input value={inputs.title} ref={initialRef} placeholder='Title' onChange={(e) => setInputs({ title: e.target.value })} />
                        <p style={{ color: "red" }}>{validation.errors?.title?.[0]}</p>

                        <FormLabel
                        >Description</FormLabel>
                        <Input value={inputs.description} ref={initialRef} placeholder='description' onChange={(e) => setInputs({ description: e.target.value })} />
                        <p style={{ color: "red" }}>{validation.errors?.description?.[0]}</p>

                        <FormLabel
                        >Category</FormLabel>
                        <CategorySelect onChangeCategory={handleCategoryChange} />

                        <FormLabel
                        >Date</FormLabel>
                        <Flex>
                            <CpnDatepicker
                                customInput={<Input width="100%" />}
                                selected={inputs.created_at ? moment(inputs.created_at).toDate() : new Date()} onChange={handleDateChange} />
                        </Flex>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={handleOnClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
export default AddTodoModal;