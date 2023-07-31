import { Flex } from "@chakra-ui/react";
import { AppDispatch } from "../../redux/root-store";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categories/slice";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/categories/thunk";
import { SOURCES_CATEGORIES } from "../../redux/categories/entity-config";
import { CategoriesEntity } from "../../types/models/categories";
import {
    Select,
} from "chakra-react-select";
const Categories = () => {
    const dispatch: AppDispatch = useDispatch();
    const data: any = useSelector(getCategories);


    useEffect(() => {
        dispatch(fetchCategories({ source: SOURCES_CATEGORIES.CATEGORIES_PAGE }))
    }, [dispatch]);
    return (
        <Flex direction="column">
            {data.data.map((value: CategoriesEntity) => {
                return (
                    <ul key={value.id}>
                        <li>{value.id}</li>
                        <li>{value.name}</li>
                    </ul>
                )
            })}
            <Select
                name="colors"
                options={data.data.map((category: CategoriesEntity) => ({
                    value: category.name,
                    label: category.name,
                }))}
                placeholder="Select some colors..."
                selectedOptionStyle="check"
            />
        </Flex>
    );
}

export default Categories;