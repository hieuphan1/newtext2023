import { Box, Button, Flex, Image, Stack, Text, useDisclosure } from "@chakra-ui/react"
import CpnAvatar from "../../constructor/CpnAvatar";
import React, { useEffect, useState } from "react";
import CpnDivider from "../../constructor/CpnDivider";
import RadioInput from "../../constructor/radio-input/RadioInput";
import { AppDispatch } from "../../redux/root-store";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categories/slice";
import { CategoriesEntity } from "../../types/models/categories";
import { fetchCategories } from "../../redux/categories/thunk";
import { SOURCES_CATEGORIES } from "../../redux/categories/entity-config";
import DatePickerInput from "../../constructor/datePicker-input/DatePickerInput";
import CpnListAvatar from "../../constructor/CpnListAvatar";
import CpnTabs from "../../constructor/CpnTabs";

import UpdateImage from "../../constructor/Update-image/UpdateImage";
import { UploadedFiles } from "../../constructor/Update-image/UpdateImageModal";
import NewFlex from "../../constructor/NewFlex";
import CpnCheckbox from "../../constructor/CpnCheckbox";
import NewNumberInput from "../../constructor/NewNumberInput";
import NewBadge from "../../constructor/NewBadge";
import CpnProgress from "../../constructor/CpnProgress";
import CpnTooltip from "../../constructor/CpnTooltip";
import CpnAccordion from "../../constructor/CpnAccordion";
import CpnStepper from "../../constructor/CpnStepper";



const avatar = [
    {
        id: 1,
        name: "Oshigaki Kisame",
        src: 'https://picsum.photos/200/300',
        content: <Button>Our aims are twofold: we want to work together to bring our ideas to life in a way we never could have at traditional jobs, and we want to offer our services to anyone out there </Button>
    },
    {
        id: 2,
        name: "Sasuke Uchiha",
        src: 'https://picsum.photos/200',
        content: <Button>But we weren't interested in creating a traditional corporation. The notion of practices like maintaining board members, distributing profits</Button>
    },
    {
        id: 3,
        name: "Naruto",
        src: 'https://picsum.photos/seed/picsum/200/300',
        content: <Button>designed Random Content Generator as a software development co-op, where every member has an equal stake in the company's future</Button>
    },
    {
        id: 4,
        name: "Luffy",
        src: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1279225/retina_1708x683_0521-react-redux-and-immutablejs-Waldek_Newsletter-993b50f4ae56e9ee6e024a309c23a6c4.png',
        content: <Button>Unmatched response times. You’ll feel like he’s sitting right there with you. Watching you, closely. At all hours..</Button>
    },
    {
        id: 5,
        name: "Doraemon",
        src: 'https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png',
        content: <Button>If you could embed .gifs here, this would be a .gif of Jian Yang. But you can't.</Button>
    },
    {
        id: 6,
        name: "Nobita",
        src: 'https://techvccloud.mediacdn.vn/2020/7/13/137-1594616701190893786687-crop-15946167118531494150206.png',
        content: <Button>Matt is a seasoned product guy who has led definition, design and launch in both startup and Fortune</Button>
    },
    {
        id: 7,
        name: "Sakura",
        src: 'https://blog.logrocket.com/wp-content/uploads/2021/02/reactquery3.png',
        content: <Button>500 environments. His formula for success: empathize with users, identify unique opportunities, and foster collaboration between</Button>
    },
    {
        id: 8,
        name: "Chaien",
        src: 'https://blog.logrocket.com/wp-content/uploads/2021/01/react-native-navigation-tutorial.png',
        content: <Button>Andrew is a software engineer experienced in backend development and devops with a </Button>
    },
    {
        id: 9,
        name: "Xeko",
        src: 'https://i.ytimg.com/vi/NQULKpW6hK4/maxresdefault.jpg',
        content: <Button>focus around automation. His skills include Docker, Kubernetes, Terraform, AWS, Node.js, and MongoDB.</Button>
    },
    {
        id: 10,
        name: "Thạch Xanh",
        src: 'https://blog.logrocket.com/wp-content/uploads/2023/03/deep-dive-mutations-tanstack.png',
        content: <Button>Chris is a full-stack JavaScript expert with experience doing everything from designing UX to managing Kubernetes deployments. He's well versed</Button>
    },
];

const steps = [
    {
        title: 'First',
        description: 'Contact Info'
    },
    {
        title: 'Second',
        description: 'Date & Time'
    },
    {
        title: 'Third',
        description: 'Select Rooms'
    },
]

const Components = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [randomAvatar, setRandomAvatar] = useState(avatar[0]);
    const dispatch: AppDispatch = useDispatch();
    const data: any = useSelector(getCategories);
    const [images, setImages] = useState<UploadedFiles[]>();


    const newData = data.data?.map((item: CategoriesEntity) => ({
        id: item.id,
        value: item.name,
        label: item.name,
    }))

    const onClickRandom = () => {
        const randomAvatar1 = Math.floor(Math.random() * avatar.length)
        setRandomAvatar(avatar[randomAvatar1])
    }

    const onSave = (item: string) => {
        console.log('Radio', item)
    }
    const onSaveDatePicker = (item: Date | null) => {
        console.log('DatePicker', item)
    }

    const onSaveImage = (image: UploadedFiles[]) => {
        console.log('imageeeeeee', image)
        setImages(image)

    }
    useEffect(() => {
        dispatch(fetchCategories({ source: SOURCES_CATEGORIES.CATEGORIES_PAGE }))
    }, [dispatch]);

    return (
        <Flex
            fontSize={{ base: '17px', md: '30px', lg: '30px' }}
            direction={"column"}
            flex={1}
        >
            <Box fontFamily="monospace"><h1 style={{ fontSize: "200%", fontWeight: "bolder", color: "#4294ed" }}>Components</h1></Box>
            <Flex direction={"column"} marginBottom={4}>
                <Text>Avatar</Text>

                <Stack direction='row'>
                    <CpnAvatar size='xl' src={randomAvatar.src} />
                    <CpnAvatar size='xl' src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" />
                    <CpnAvatar size='xl' />
                    <Button onClick={onClickRandom}>Random</Button>
                </Stack>
            </Flex>
            <Flex direction={"column"}>
                <Text>Divider</Text>
                <CpnDivider name="Text" />
            </Flex>
            <Flex direction={"column"}>
                <Text>Radio</Text>
                <RadioInput onOpen={onOpen} isOpen={isOpen} onClose={onClose} onSave={onSave} newData={newData} />

            </Flex>
            <Flex direction={"column"}>
                <Text>DataPicker</Text>
                <DatePickerInput onSaveDatePicker={onSaveDatePicker} />
            </Flex>
            <Flex direction={"column"}>
                <Text>Number Input</Text>
                <NewNumberInput />
            </Flex>
            <Flex direction={"column"}>
                <Text>ListAvatar</Text>
                <CpnListAvatar data={avatar} />
            </Flex>
            <Flex direction={"column"}>
                <Text>Tabs</Text>
                <CpnTabs dataTab={avatar} />
            </Flex>
            <Flex textAlign='center' direction={"column"}>
                <Flex height="100px" justifyContent='flex-start'>
                    <Text>Upload Image</Text>
                </Flex>
                <Flex
                    marginBottom={4}
                    mx='auto'
                    height='200px'
                    width='200px'
                    border='1px'
                    borderColor='gray.300'
                    justify="center" // Căn giữa theo chiều ngang (trục X)
                >
                    {
                        images?.map((item) => {
                            return (
                                <Image src={item.preview} />
                            )
                        })
                    }
                </Flex>
                <UpdateImage onSaveImage={onSaveImage} />


            </Flex>

            <Flex direction={"column"}>
                <Text>Checkbox</Text>
                <CpnCheckbox disabled defaultChecked />
                <CpnCheckbox text="Naruto" invalid color="blue.200" />
                <CpnCheckbox text="Sasuke" color="pink.200" />
            </Flex>
            <Flex direction={"column"}>
                <Text>Badge</Text>
                <NewBadge>assssđ</NewBadge>

                <NewBadge color="pink" text="beautiful" />

            </Flex>
            <Flex direction={"column"}>
                <Text>Progress</Text>
                <CpnProgress width="60%" />

            </Flex>
            <Flex direction={"column"}>
                <Text>Tag Here</Text>
                <CpnTooltip label="Hover me "><NewBadge>Tag Here</NewBadge>
                </CpnTooltip>
            </Flex>

            <Flex direction={"column"}>
                <Text>Accordion</Text>
                <CpnAccordion />
            </Flex>

            <Flex direction={"column"}>
                <Text>Stepper</Text>
                <CpnStepper data={steps} />

            </Flex>

            <Flex direction={"column"}>
                <Text>Flex</Text>
                <NewFlex />

            </Flex>
        </Flex>
    );
}

export default Components;