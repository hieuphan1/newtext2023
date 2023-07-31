import { AsyncThunk } from "@reduxjs/toolkit";
import { RequestState } from "redux-thunk-kit";
import { useAppSelector } from "./useAppSelector";

export function useRequestState(
    thunkAction: AsyncThunk<any, any, any> & any
): RequestState {
    const requestState = useAppSelector(
        (state) => state.books[thunkAction.typePrefix]
    );
    if (requestState) {
        const { firstPage, loading, error, errCode, contexts } = requestState;
        return { firstPage, loading, error, errCode, contexts };
    }
    return {};
}