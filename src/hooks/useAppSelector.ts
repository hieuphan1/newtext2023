import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;