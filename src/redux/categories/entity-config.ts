import { ApiService, BaseEntityConfig, WhiteListFields } from 'redux-thunk-kit';
import { CategoriesEntity } from '../../types/models/categories';

class EntityConfig extends BaseEntityConfig<CategoriesEntity> {
    entityKey = 'categories';

    associates = [{ name: 'author', unset: false }];

    whiteListFields: WhiteListFields<CategoriesEntity> = ['*'];

    getAccessors = (value: CategoriesEntity) => {
        //
    };
}

const categoriesEntConf = new EntityConfig();

export const categoriesSchema = categoriesEntConf.getEntitySchema();

export default categoriesEntConf;

export const SOURCES_CATEGORIES = {
    CATEGORIES_PAGE: 'CATEGORIES_PAGE',
    SEARCH_PAGE: 'SEARCH_PAGE'
};
export interface ThunkKitConfig {
    apiServices: ApiService[];
    dummyData?: Record<string, any>;
    errorHandler?: any;
}