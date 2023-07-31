import { ApiService, BaseEntityConfig, WhiteListFields } from 'redux-thunk-kit';
import { TodoEntity } from '../../types/models/todo';

class EntityConfig extends BaseEntityConfig<TodoEntity> {
    entityKey = 'todos';

    associates = [{ name: 'author', unset: false }];

    whiteListFields: WhiteListFields<TodoEntity> = ['*'];

    getAccessors = (value: TodoEntity) => {
        //
    };
}

const todoEntConf = new EntityConfig();

export const todoSchema = todoEntConf.getEntitySchema();

export default todoEntConf;

export const SOURCES_TODO = {
    TODOS_PAGE: 'TODOS_PAGE',
    SEARCH_PAGE: 'SEARCH_PAGE'
};
export interface ThunkKitConfig {
    apiServices: ApiService[];
    dummyData?: Record<string, any>;
    errorHandler?: any;
}