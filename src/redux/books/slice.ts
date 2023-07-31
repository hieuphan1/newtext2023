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

import { BookEntity } from '../../types/models/book';
import { RootState } from '../root-reducer';
import { SOURCES_BOOK } from './entity-config';
import { addBook, deleteBook, fetchBooks, updateBook } from './thunk';

interface InitialState extends ReducerState { }

const sources = mapValues(SOURCES_BOOK, () => DEFAULT_SOURCE_REDUCER_STATE);

const booksAdapter = createEntityAdapter<BookEntity>();

const initialState = booksAdapter.getInitialState<InitialState>({ sources });

const books = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
            upsertManyMutably(booksAdapter, state, payload.normalized.entities.books);
            fetchSuccess(state, payload);
        });
        builder.addCase(addBook.fulfilled, (state, { payload }) => {
            upsertMany(booksAdapter, state, payload.normalized.entities.books);
            addIdsToSources(state, payload.normalized.result, [SOURCES_BOOK.BOOKS_PAGE]);
        });
        builder.addCase(updateBook.fulfilled, (state, { payload }) => {
            upsertOneMutably(booksAdapter, state, payload.normalized.entities.books);
        });
        builder.addCase(deleteBook.fulfilled, (state, { payload, meta }) => {
            const { arg } = meta;
            booksAdapter.removeOne(state, arg?.id as EntityId);
            deleteSuccess(state, arg?.id);
        });
    },
});

// export const {} = books.actions;

export default books.reducer;

export const {
    selectById: selectBookById,
    selectIds: selectBooksIds,
    selectEntities: selectBooksEntities,
    selectAll: selectAllBooks,
    selectTotal: selectTotalBooks,
} = booksAdapter.getSelectors((state: RootState) => state.books);

export const [getBooks] = createSelectAllBySource('books', selectBooksEntities, [SOURCES_BOOK.BOOKS_PAGE]);