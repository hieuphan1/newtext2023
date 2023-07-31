import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/root-store";


export const useAppDispatch: () => AppDispatch = useDispatch;