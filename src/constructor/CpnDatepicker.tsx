
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props extends ReactDatePickerProps {

}

const CpnDatepicker = ({ ...rest }: Props) => {
    return (
        <DatePicker
            {...rest}
        />
    );
}

export default CpnDatepicker;