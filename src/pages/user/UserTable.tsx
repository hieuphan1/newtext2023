import { Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/root-store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/thunk";
import { SOURCES_USER } from "../../redux/users/entity-config";
import { getusers } from "../../redux/users/slice";
import { UserEntity } from "../../types/models/user";

const UserTable = () => {
    const dispatch: AppDispatch = useDispatch();
    const data: any = useSelector(getusers)
    useEffect(() => {
        dispatch(fetchUsers({ source: SOURCES_USER.USERS_PAGE }))
    }, [dispatch])

    return (
        <Flex fontSize={{ base: '12px', md: '20px', lg: '30px' }} direction="column" flex={1}>
            <Flex fontFamily="monospace"><h1 style={{ fontSize: "200%", fontWeight: "bolder", color: "#4294ed" }}>User Table</h1></Flex>
            <Flex>
                {
                    data.data.map((value: UserEntity) => {
                        return (
                            <Flex>
                                <Text>{value.id}</Text>
                                <Text>hi</Text>
                            </Flex>
                        )
                    })
                }
            </Flex>
        </Flex>
    );
}

export default UserTable;