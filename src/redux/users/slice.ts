import { createEntityAdapter, createSlice, EntityId } from '@reduxjs/toolkit';
import { mapValues } from 'lodash';
import {
    addIdsToSources,
    createSelectAllBySource,
    DEFAULT_SOURCE_REDUCER_STATE,
    deleteSuccess,
    fetchSuccess,
    ReducerState,
    upsertMany,
    upsertManyMutably,
    upsertOneMutably,
} from 'redux-thunk-kit';

import { RootState } from '../root-reducer';
import { SOURCES_USER } from './entity-config';
import { addUser, deleteUser, fetchUsers, updateUser } from './thunk';
import { UserEntity } from '../../types/models/user';

interface InitialState extends ReducerState {
    completedUser?: UserEntity[]
}

const sources = mapValues(SOURCES_USER, () => DEFAULT_SOURCE_REDUCER_STATE);

const usersAdapter = createEntityAdapter<UserEntity>();

const initialState = usersAdapter.getInitialState<InitialState>({
    sources,
    completedUser: undefined
});

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // addCompleted: (state, payload) => {
        //     const newA = [...state.completedTodo || []]
        //     newA.push(payload.payload)
        //     state.completedTodo = newA
        // }
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
            upsertManyMutably(usersAdapter, state, payload.normalized.entities.user);
            fetchSuccess(state, payload);
        });
        builder.addCase(addUser.fulfilled, (state, { payload }) => {
            upsertMany(usersAdapter, state, payload.normalized.entities.user);
            addIdsToSources(state, payload.normalized.result, [SOURCES_USER.USERS_PAGE]);
        });
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            upsertOneMutably(usersAdapter, state, payload.normalized.entities.user);
        });
        builder.addCase(deleteUser.fulfilled, (state, { payload, meta }) => {
            const { arg } = meta;
            usersAdapter.removeOne(state, arg?.id as EntityId);
            deleteSuccess(state, arg?.id);
        });
    },
});

// export const { addCompleted } = users.actions;

export default users.reducer;

export const {
    selectById: selectUserById,
    selectIds: selectUsersIds,
    selectEntities: selectUsersEntities,
    selectAll: selectAllUsers,
    selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export const [getusers] = createSelectAllBySource('users', selectUsersEntities, [SOURCES_USER.USERS_PAGE]);