import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface props {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void,
    searchParam: string,
}
const SearchTodo = ({ searchParam, handleSearch }: props) => {
    return (
        <Box w='500px' h='10,5' >
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon />
                </InputLeftElement>
                <Input
                    value={searchParam}
                    onChange={handleSearch} // Use the debounced updateSearch function here
                    type="text"
                    placeholder="Search Todo"
                />
            </InputGroup>
        </Box>
    );
}

export default SearchTodo;