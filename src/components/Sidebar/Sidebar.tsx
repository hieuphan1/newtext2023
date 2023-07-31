import React, { useEffect, useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Button
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar
} from 'react-icons/fi'
import NavItem from './NavItem'
import { Outlet, useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();
    const [navSize, changeNavSize] = useState(getInitialNavSize());

    useEffect(() => {
        const handleResize = () => {
            changeNavSize(getInitialNavSize());
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function getInitialNavSize() {
        return window.innerWidth < 768 ? 'small' : 'large';
    }

    const handleLogOut = () => {
        localStorage.removeItem('Login');
        navigate("/Login", { replace: true });
    }

    const routes = [
        {
            navigateTo: 'todo',
            active: null,
            navSize: navSize,
            icon: FiHome,
            title: 'TodoList',
            description: ''
        },
        {
            navigateTo: 'completed',
            active: null,
            navSize: navSize,
            icon: FiCalendar,
            title: 'Completed',
            description: ''
        },
        {
            navigateTo: 'components',
            active: null,
            navSize: navSize,
            icon: FiCalendar,
            title: 'Components',
            description: ''
        },
        {
            navigateTo: 'user',
            active: null,
            navSize: navSize,
            icon: FiCalendar,
            title: 'User',
            description: ''
        },

    ]

    return (
        <Flex
            fontSize={{ base: '15px', md: '17px', lg: '20px' }}
            direction="row"
            gap={4}
        >
            <Flex>
                <Flex
                    pos="sticky"
                    left="5"
                    h="95vh"
                    marginTop="2.5vh"
                    boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                    borderRadius={navSize === "small" ? "15px" : "30px"}
                    w={navSize === "small" ? "75px" : "200px"}
                    flexDir="column"
                    justifyContent="space-between"
                >
                    <Flex
                        p="5%"
                        flexDir="column"
                        w="100%"
                        alignItems={navSize === "small" ? "center" : "flex-start"}
                        as="nav"
                    >
                        <IconButton
                            background="none"
                            mt={5}
                            _hover={{ background: 'none' }}
                            icon={<FiMenu />}
                            onClick={() => {
                                if (navSize === 'small') changeNavSize('large');
                                else changeNavSize('small');
                            }}
                            aria-label={''}
                        />
                        {routes.map(route => (
                            <NavItem
                                key={route.navigateTo}
                                navigateTo={route.navigateTo}
                                active={route.active}
                                navSize={route.navSize}
                                icon={route.icon}
                                title={route.title}
                                description={route.description}
                            />
                        ))}

                    </Flex>

                    <Flex
                        p="5%"
                        flexDir="column"
                        w="100%"
                        alignItems={navSize === "small" ? "center" : "flex-start"}
                        mb={4}
                    >
                        <Divider display={navSize === "small" ? "none" : "flex"} />
                        <Flex mt={4} align="center">
                            <Avatar size="sm" src="avatar-1.jpg" />
                            <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                                <Heading as="h3" size="sm">Sylwia Weller</Heading>
                                <Text color="gray">Admin</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Button onClick={handleLogOut}>LogOut</Button>


                </Flex>
            </Flex>
            <Flex flex={1}> <Outlet /></Flex>

        </Flex>
    )
}
