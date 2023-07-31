import {
    Select,
} from "chakra-react-select";
import { Props as SelectProps } from 'react-select'


interface props extends SelectProps {
    dataOption?: { id: number, value: any, label: string }[];
}

const CpnSelect = ({ dataOption = [], ...rest }: props) => {
    return (
        <Select
            name="colors"
            placeholder="Select some colors..."
            selectedOptionStyle="check"
            options={dataOption}
            {...rest}
        />
    );
}

export default CpnSelect;