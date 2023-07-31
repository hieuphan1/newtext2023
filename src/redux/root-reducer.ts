import { combineReducers } from "@reduxjs/toolkit";
import books from "./books/slice"
import todos from "./todos/slice"
import auths from "./auths/slice"
import categories from "./categories/slice"
import users from "./users/slice"


// import artists from "./artists/slice"

const appReducer = combineReducers({
    books,
    todos,
    auths,
    categories,
    users,
    // artists
});

const rootReducer = (state: any, action: any) => {

    return appReducer(state, action);
};


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;