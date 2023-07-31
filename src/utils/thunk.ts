import { ThunkKit } from 'redux-thunk-kit';
import { AppError } from 'ry-error-wrapper';
import { times } from 'lodash';
import axios from 'axios';
import { ENDPOINTS } from '../constructor/endpoints';
import { faker } from '@faker-js/faker';

const dummyData = {
    [ENDPOINTS.BOOKS]: {
        get: times(50, Number).map(i => ({ title: faker.lorem.sentence(), id: i + 1 })),
        post: { title: faker.lorem.sentence(), id: Math.floor(Math.random() * 10) }
    },
    [ENDPOINTS.USER]: {
        get: times(5, Number).map(i => ({ name: faker.person.fullName(), gender: faker.person.prefix(), id: i + 1 })),
        post: { name: faker.person.fullName(), gender: faker.person.prefix(), id: Math.floor(Math.random() * 10) }
    },
    [ENDPOINTS.TODO]: {
        get: times(6, Number).map(i => ({
            title: faker.lorem.sentence(), description: faker.lorem.sentences(), priority: Math.floor(Math.random() * 10), created_at: faker.date.birthdate(), category: {
                id: Math.floor(Math.random() * 4),
                name: "category"
            }, id: i + 1
        })),
        post: {
            title: faker.lorem.sentence(), description: faker.lorem.sentences(), priority: Math.floor(Math.random() * 1000), created_at: faker.date.birthdate(), category: {
                id: Math.floor(Math.random() * 1000),
                name: "hi"
            }, id: Math.floor(Math.random() * 1000)
        },
        delete: { title: faker.lorem.sentence(), description: faker.lorem.sentences(), id: Math.floor(Math.random() * 1000) },
        put: {
            title: faker.lorem.sentence(), description: faker.lorem.sentences(), priority: Math.floor(Math.random() * 1000), created_at: faker.date.birthdate(), category: {
                id: Math.floor(Math.random() * 1000),
                name: "hi"
            }, id: 2
        }
    },
    [ENDPOINTS.AUTH]: {
        post: { key: faker.lorem.sentence(), id: 1 }
    },
    [ENDPOINTS.AUTH + "/login"]: {
        post: { key: faker.internet.password(), id: 1 }
    },
    [ENDPOINTS.CATEGORIES]: {
        get: [
            {
                id: 1,
                name: "Job"
            },
            {
                id: 2,
                name: "Fizz"
            },
            {
                id: 3,
                name: "Cat"
            },
            {
                id: 4,
                name: "Human"
            }
        ]
    }
}

const request = axios.create({ baseURL: 'api.main.com' })
const fooRequest = axios.create({ baseURL: 'api.foo.com' })
const barRequest = axios.create({ baseURL: 'api.bar.com' })

const config = {
    apiServices: [
        { name: 'main', axios: request, isDefault: true, isSnakeCase: true },
        { name: 'foo', axios: fooRequest, isSnakeCase: false },
        { name: 'bar', axios: barRequest, isSnakeCase: false },
    ],
    errorHandler: AppError,
    dummyData
}

class MainThunk extends ThunkKit {
}

export const thunk = new MainThunk(config)