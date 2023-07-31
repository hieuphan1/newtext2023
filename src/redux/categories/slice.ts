import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { mapValues } from 'lodash';

import {
    createSelectAllBySource,
    DEFAULT_SOURCE_REDUCER_STATE,
    fetchSuccess,
    ReducerState,
    upsertManyMutably,
} from 'redux-thunk-kit';

import { RootState } from '../root-reducer';
import { SOURCES_CATEGORIES } from './entity-config';
import { CategoriesEntity } from '../../types/models/categories';
import { fetchCategories } from './thunk';

interface InitialState extends ReducerState { }

const sources = mapValues(SOURCES_CATEGORIES, () => DEFAULT_SOURCE_REDUCER_STATE);

const categoriesAdapter = createEntityAdapter<CategoriesEntity>();

const initialState = categoriesAdapter.getInitialState<InitialState>({ sources });

const categories = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
            upsertManyMutably(categoriesAdapter, state, payload.normalized.entities.categories);
            fetchSuccess(state, payload);
        });
        // builder.addCase(addBook.fulfilled, (state, { payload }) => {
        //     upsertMany(booksAdapter, state, payload.normalized.entities.books);
        //     addIdsToSources(state, payload.normalized.result, [SOURCES_BOOK.BOOKS_PAGE]);
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

export default categories.reducer;

export const {
    selectById: selectCategoriesById,
    selectIds: selectCategoriesIds,
    selectEntities: selectCategoriesEntities,
    selectAll: selectAllCategories,
    selectTotal: selectTotalCategories,
} = categoriesAdapter.getSelectors((state: RootState) => state.categories);

export const [getCategories] = createSelectAllBySource('categories', selectCategoriesEntities, [SOURCES_CATEGORIES.CATEGORIES_PAGE]);