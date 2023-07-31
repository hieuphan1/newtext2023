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
import { SOURCES_TODO } from './entity-config';
import { TodoEntity } from '../../types/models/todo';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './thunk';

interface InitialState extends ReducerState {
    completedTodo?: TodoEntity[]
}

const sources = mapValues(SOURCES_TODO, () => DEFAULT_SOURCE_REDUCER_STATE);

const todosAdapter = createEntityAdapter<TodoEntity>();

const initialState = todosAdapter.getInitialState<InitialState>({
    sources,
    completedTodo: undefined
});

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addCompleted: (state, payload) => {
            const newA = [...state.completedTodo || []]
            newA.push(payload.payload)
            state.completedTodo = newA
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
            upsertManyMutably(todosAdapter, state, payload.normalized.entities.todos);
            fetchSuccess(state, payload);
        });
        builder.addCase(addTodo.fulfilled, (state, { payload }) => {
            upsertMany(todosAdapter, state, payload.normalized.entities.todos);
            addIdsToSources(state, payload.normalized.result, [SOURCES_TODO.TODOS_PAGE]);
        });
        builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
            upsertOneMutably(todosAdapter, state, payload.normalized.entities.todos);
        });
        builder.addCase(deleteTodo.fulfilled, (state, { payload, meta }) => {
            const { arg } = meta;
            todosAdapter.removeOne(state, arg?.id as EntityId);
            deleteSuccess(state, arg?.id);
        });
    },
});

export const { addCompleted } = todos.actions;

export default todos.reducer;

export const {
    selectById: selectTodoById,
    selectIds: selectTodosIds,
    selectEntities: selectTodosEntities,
    selectAll: selectAllTodos,
    selectTotal: selectTotalTodos,
} = todosAdapter.getSelectors((state: RootState) => state.todos);

export const [getTodos] = createSelectAllBySource('todos', selectTodosEntities, [SOURCES_TODO.TODOS_PAGE]);