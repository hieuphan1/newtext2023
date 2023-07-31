import {
    Action,
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
} from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./root-reducer";
import { registerSchemas } from "./schema";

const middleware = getDefaultMiddleware();

const rootStore = configureStore({
    reducer: rootReducer,
    middleware,
});

export type AppDispatch = typeof rootStore.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

registerSchemas();

export default rootStore;