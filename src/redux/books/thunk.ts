import { unwrapResult } from '@reduxjs/toolkit';
import { AppError } from 'ry-error-wrapper';
import { DeleteParams, FetchParams, PostParams, PutParams, requestFailed } from 'redux-thunk-kit';
import { BookEntity, NormalizedBook } from '../../types/models/book';
import { bookSchema } from './entity-config';
import { thunk } from '../../utils/thunk';
import { ENDPOINTS } from '../../constructor/endpoints';

export interface FetchBookParams extends FetchParams {
    // id?: string
}
export interface AddBookParams extends PostParams {
    // id?: string
}export interface UpdateBookParams extends PutParams {
    // id?: string
}export interface DeleteBookParams extends DeleteParams {
    // id?: string
}

const query = thunk.query<BookEntity, NormalizedBook>('book', bookSchema);

export const fetchBooks = query.fetch<FetchBookParams>(ENDPOINTS.BOOKS, '', { dummyData: true });
export const addBook = query.post<AddBookParams>(ENDPOINTS.BOOKS);
export const updateBook = query.put<UpdateBookParams>(`${ENDPOINTS.BOOKS}/:id`);
export const deleteBook = query.delete<DeleteBookParams>(`${ENDPOINTS.BOOKS}/:id`, '', { withoutNormalize: true });

// export const addThenDeleteBook = query.wrapper<BookEntity, number>('addThenDeletePrefix',
//     async ({ title }, { dispatch }) => {
//         const addBookResult = await dispatch(addBook({ title }));
//         if (requestFailed(addBookResult, addBook)) {
//             throw new AppError('Add book failed')
//         }
//         const { apiResponseData } = unwrapResult(addBookResult);
//         const bookId = apiResponseData.id

//         const deleteBookResult = await dispatch(deleteBook({ id: bookId }));
//         if (requestFailed(deleteBookResult, deleteBook)) {
//             throw new AppError('Delete book failed')
//         }

//         return bookId
//     })