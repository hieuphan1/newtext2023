import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/root-store";
import { getCategories } from "../redux/categories/slice";
import { useEffect } from "react";
import { fetchCategories } from "../redux/categories/thunk";
import { Flex } from "@chakra-ui/react";
import { CategoriesEntity } from "../types/models/categories";
import { SOURCES_CATEGORIES } from "../redux/categories/entity-config";
import CpnSelect from "../constructor/CpnSelect";
interface props {
    onChangeCategory: (name: string) => void
}

const CategorySelect = ({ onChangeCategory }: props) => {
    const dispatch: AppDispatch = useDispatch();
    const data: any = useSelector(getCategories);

    const newData = data.data?.map((item: CategoriesEntity) => ({
        id: item.id,
        value: item.id,
        label: item.name,
    }))

    useEffect(() => {
        dispatch(fetchCategories({ source: SOURCES_CATEGORIES.CATEGORIES_PAGE }))
    }, [dispatch]);
    return (
        <Flex direction="column">
            <CpnSelect onChange={() => onChangeCategory} dataOption={newData} />
        </Flex>
    );
}

export default CategorySelect;
