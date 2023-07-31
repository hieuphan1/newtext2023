import { ApiService, BaseEntityConfig, WhiteListFields } from 'redux-thunk-kit';
import { BookEntity } from '../../types/models/book';

class EntityConfig extends BaseEntityConfig<BookEntity> {
    entityKey = 'books';

    associates = [{ name: 'author', unset: false }];

    whiteListFields: WhiteListFields<BookEntity> = ['*'];

    getAccessors = (value: BookEntity) => {
        //
    };
}

const bookEntConf = new EntityConfig();

export const bookSchema = bookEntConf.getEntitySchema();

export default bookEntConf;

export const SOURCES_BOOK = {
    BOOKS_PAGE: 'BOOKS_PAGE',
    SEARCH_PAGE: 'SEARCH_PAGE'
};
export interface ThunkKitConfig {
    apiServices: ApiService[];
    dummyData?: Record<string, any>;
    errorHandler?: any;
}