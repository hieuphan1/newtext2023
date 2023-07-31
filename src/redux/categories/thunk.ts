import { DeleteParams, FetchParams, PostParams, PutParams } from 'redux-thunk-kit';
import { thunk } from '../../utils/thunk';
import { ENDPOINTS } from '../../constructor/endpoints';
import { NormalizedTodo } from '../../types/models/todo';
import { categoriesSchema } from './entity-config';
import { CategoriesEntity, NormalizedCategories } from '../../types/models/categories';

export interface FetchCategoriesParams extends FetchParams {
    // id?: string
}
export interface AddTodoParams extends PostParams {
    // id?: stringx
}export interface UpdateTodoParams extends PutParams {
    // id?: string
}export interface DeleteTodoParams extends DeleteParams {
    // id?: string
}

const query = thunk.query<CategoriesEntity, NormalizedCategories>('categories', categoriesSchema);

export const fetchCategories = query.fetch<FetchCategoriesParams>(ENDPOINTS.CATEGORIES, 'categories', { dummyData: true });
// export const addTodo = query.post<AddTodoParams>(ENDPOINTS.TODO, '', { dummyData: true });
// export const updateTodo = query.put<UpdateTodoParams>(`${ENDPOINTS.TODO}`, '', { dummyData: true });
// export const deleteTodo = query.delete<DeleteTodoParams>(`${ENDPOINTS.TODO}`, '', { dummyData: true });

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