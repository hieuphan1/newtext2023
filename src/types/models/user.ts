import { AxiosInstance } from "axios";

export interface userApiItem {
    id: number;
    name: string;
    gender: string;

}

export interface UserEntity extends userApiItem { }

export interface NormalizedUser {
    user: { [key: string]: UserEntity };
}

export interface ApiService {
    name: string;
    axios: AxiosInstance;
    isDefault?: boolean;
    isSnakeCase?: boolean; // Auto transform all param keys to snake case before making API requests
}