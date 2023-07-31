import { ApiService, BaseEntityConfig, WhiteListFields } from 'redux-thunk-kit';
import { AuthEntity } from '../../types/models/auth';

class EntityConfig extends BaseEntityConfig<AuthEntity> {
    entityKey = 'auths';

    associates = [{ name: 'author', unset: false }];

    whiteListFields: WhiteListFields<AuthEntity> = ['*'];

    getAccessors = (value: AuthEntity) => {
        //
    };
}

const authEntConf = new EntityConfig();

export const authSchema = authEntConf.getEntitySchema();

export default authEntConf;

export const SOURCES_AUTH = {
    AUTHS_PAGE: 'AUTHS_PAGE',
    SEARCH_PAGE: 'SEARCH_PAGE'
};
export interface ThunkKitConfig {
    apiServices: ApiService[];
    dummyData?: Record<string, any>;
    errorHandler?: any;
}