import { ApiService, BaseEntityConfig, WhiteListFields } from 'redux-thunk-kit';
import { UserEntity } from '../../types/models/user';

class EntityConfig extends BaseEntityConfig<UserEntity> {
    entityKey = 'users';

    associates = [{ name: 'author', unset: false }];

    whiteListFields: WhiteListFields<UserEntity> = ['*'];

    getAccessors = (value: UserEntity) => {
        //
    };
}

const userEntConf = new EntityConfig();

export const userSchema = userEntConf.getEntitySchema();

export default userEntConf;

export const SOURCES_USER = {
    USERS_PAGE: 'USERS_PAGE',
    SEARCH_PAGE: 'SEARCH_PAGE'
};
export interface ThunkKitConfig {
    apiServices: ApiService[];
    dummyData?: Record<string, any>;
    errorHandler?: any;
}