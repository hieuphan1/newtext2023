import { DeleteParams, FetchParams, PostParams, PutParams } from 'redux-thunk-kit';
import { thunk } from '../../utils/thunk';
import { ENDPOINTS } from '../../constructor/endpoints';
import { userSchema } from './entity-config';
import { NormalizedUser, UserEntity } from '../../types/models/user';

export interface FetchUserParams extends FetchParams {
    // id?: string
}
export interface AddUserParams extends PostParams {
    // id?: stringx
}export interface UpdateUserParams extends PutParams {
    // id?: string
}export interface DeleteUserParams extends DeleteParams {
    // id?: string
}

const query = thunk.query<UserEntity, NormalizedUser>('user', userSchema);

export const fetchUsers = query.fetch<FetchUserParams>(ENDPOINTS.USER, '', { dummyData: true });
export const addUser = query.post<AddUserParams>(ENDPOINTS.USER, '', { dummyData: true });
export const updateUser = query.put<UpdateUserParams>(`${ENDPOINTS.USER}`, '', { dummyData: true });
export const deleteUser = query.delete<DeleteUserParams>(`${ENDPOINTS.USER}`, '', { dummyData: true });

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