import { DeleteIcon, LinkIcon } from "@chakra-ui/icons";
import { Button, Flex, FormControl, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

export interface UploadedFiles extends File {
    preview: string
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    handleSaveImage: (image: UploadedFiles[]) => void;
}
const UpdateImageModal = ({ isOpen, onClose, handleSaveImage }: Props) => {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [isDeleting, setIsDeleting] = useState<Number>();

    const [acceptedFiles, setAcceptedFiles] = useState<UploadedFiles[]>([
    ]);

    const handleDrop = (acceptedFiles: File[]) => {
        setAcceptedFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }

    const deleteImage = (index: number) => {

        setIsDeleting(index)
        setTimeout(() => {
            setIsDeleting(undefined);
            const updatefile = [...acceptedFiles];
            updatefile.splice(index, 1);
            setAcceptedFiles(updatefile)
        }, 1200)
    }

    const handleClick = () => {

        handleSaveImage(acceptedFiles);
        onClose()
    }


    const renderImages = () => {
        return (
            <>
                <p>{isDeleting + ''}</p>
                {
                    acceptedFiles.map((item, index) => {
                        // setIsDeleting(index)
                        console.log("bb")
                        return (
                            <Flex marginBottom={3} padding={3} bg='whiteAlpha.700'>
                                <Flex >
                                    <Image marginRight={5} boxSize='70px' src={item.preview} />
                                    <p>{item.name}</p>
                                    <p>{index}</p>
                                </Flex>

                                <Flex
                                    flex={1}
                                    justifyContent='flex-end'
                                    alignItems="center"
                                >
                                    <DeleteIcon onClick={() => { deleteImage(index) }} color='red.400' textAlign='right' />
                                </Flex>
                                {(isDeleting === index) ? (
                                    <Flex alignItems="center">
                                        <Spinner size="md" color="red.500" mr={2} />
                                        <Text color="blue.400" fontSize="sm">
                                            Moving to Completed...
                                        </Text>
                                    </Flex>
                                ) : null}
                            </Flex>

                        )
                    })
                }

            </>
        )


    }

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent bg='blue.300'>
                <ModalHeader>Create your image</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>

                        <Dropzone onDrop={handleDrop}>

                            {({ getRootProps, getInputProps }) => (
                                <section className="container">
                                    <div {...getRootProps({ className: 'dropzone' })}>
                                        <Flex

                                            direction='column'
                                            marginBottom={4}
                                            mx='auto'
                                            height='120px'
                                            width='sm'
                                            border='1px'
                                            borderColor='gray.300'
                                            borderStyle='dashed'
                                            align="center" // Căn chỉnh nội dung theo chiều dọc (trục Y) vào giữa trung tâm
                                            justify="center" // Căn chỉnh nội dung theo chiều ngang (trục X) vào giữa trung tâm
                                        >
                                            <LinkIcon />
                                            <Flex>Drag and drop or <Text textDecoration='underline'>&ensp;browse</Text></Flex>
                                        </Flex>
                                        <input {...getInputProps()} />
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        {renderImages()}
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClick} colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default UpdateImageModal;
