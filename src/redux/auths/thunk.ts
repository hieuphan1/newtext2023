import { DeleteParams, FetchParams, PostParams, PutParams, requestFailed } from 'redux-thunk-kit';
import { thunk } from '../../utils/thunk';
import { ENDPOINTS } from '../../constructor/endpoints';
import { AuthEntity, NormalizedAuth } from '../../types/models/auth';
import { authSchema } from './entity-config';
import { AppError } from 'ry-error-wrapper';
import { unwrapResult } from '@reduxjs/toolkit';

export interface FetchAuthParams extends FetchParams {
    // id?: string
}
export interface AddAuthParams extends PostParams {
    data: {
        email: string,
        password: string
    }
    // id?: string
}export interface UpdateAuthParams extends PutParams {
    // id?: string
}export interface DeleteAuthParams extends DeleteParams {
    // id?: string
}

const query = thunk.query<AuthEntity, NormalizedAuth>('auth', authSchema);

// export const fetchAuths = query.fetch<FetchAuthParams>(ENDPOINTS.AUTH, '', { dummyData: true });
export const loginEmail = query.post<AddAuthParams>(ENDPOINTS.AUTH + "/login", 'login', { dummyData: true, includeApiResponseData: true });
// export const updateAuth = query.put<UpdateAuthParams>(`${ENDPOINTS.AUTH}/:id`);
// export const deleteAuth = query.delete<DeleteAuthParams>(`${ENDPOINTS.AUTH}/:id`, '', { withoutNormalize: true });

export const loginWithEmail = query.wrapper<any, AddAuthParams>('loginWithEmailPrefix',
    async ({ data }, { dispatch }) => {
        const addBookResult = await dispatch(loginEmail({ data }));
        console.log('a111', unwrapResult(addBookResult))
        if (requestFailed(addBookResult, loginEmail)) {
            throw new AppError('Add book failed')
        }
        const { apiResponseData } = unwrapResult(addBookResult);
        if (apiResponseData.key) {
            localStorage.setItem('Login', apiResponseData.key);
        }
    })

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