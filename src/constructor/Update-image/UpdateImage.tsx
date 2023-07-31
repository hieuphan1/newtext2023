import { Button, useDisclosure } from "@chakra-ui/react";
import UpdateImageModal from "./UpdateImageModal";
import { UploadedFiles } from "./UpdateImageModal";
interface Props {
    onSaveImage: (image: UploadedFiles[]) => void;

}

const UpdateImage = ({ onSaveImage }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSaveImage = (item: UploadedFiles[]) => {
        onSaveImage(item);
    }
    return (
        <>
            <Button marginBottom={4} mx='auto' onClick={onOpen}>Update</Button>
            <UpdateImageModal handleSaveImage={handleSaveImage} isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default UpdateImage;