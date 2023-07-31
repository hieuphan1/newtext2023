import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
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
import { SOURCES_AUTH } from './entity-config';
import { AuthEntity } from '../../types/models/auth';
import { loginEmail } from './thunk';

interface InitialState extends ReducerState { }

const sources = mapValues(SOURCES_AUTH, () => DEFAULT_SOURCE_REDUCER_STATE);

const authsAdapter = createEntityAdapter<AuthEntity>();

const initialState = authsAdapter.getInitialState<InitialState>({ sources });

const auths = createSlice({
    name: 'auths',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // builder.addCase(fetchAuths.fulfilled, (state, { payload }) => {
        //     upsertManyMutably(authsAdapter, state, payload.normalized.entities.books);
        //     fetchSuccess(state, payload);
        // });
        // builder.addCase(addAuth.fulfilled, (state, { payload }) => {
        //     upsertMany(authsAdapter, state, payload.normalized.entities.auths);
        //     addIdsToSources(state, payload.normalized.result, [SOURCES_AUTH.AUTHS_PAGE]);
        // });
        // builder.addCase(updateBook.fulfilled, (state, { payload }) => {
        //     upsertOneMutably(booksAdapter, state, payload.normalized.entities.books);
        // });
        // builder.addCase(deleteBook.fulfilled, (state, { payload, meta }) => {
        //     const { arg } = meta;
        //     booksAdapter.removeOne(state, arg?.id as EntityId);
        //     deleteSuccess(state, arg?.id);
        // });
    },
});

// export const {} = books.actions;

export default auths.reducer;

export const {
    selectById: selectAuthById,
    selectIds: selectAuthsIds,
    selectEntities: selectAuthsEntities,
    selectAll: selectAllAuths,
    selectTotal: selectTotalAuths,
} = authsAdapter.getSelectors((state: RootState) => state.auths);

export const [getAuths] = createSelectAllBySource('auths', selectAuthsEntities, [SOURCES_AUTH.AUTHS_PAGE]);