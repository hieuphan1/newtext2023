import { AxiosInstance } from "axios";

export interface AuthApiItem {
    id: number;
    key: string;
}

export interface AuthEntity extends AuthApiItem { }

export interface NormalizedAuth {
    auths: { [key: string]: AuthEntity };
}

export interface ApiService {
    name: string;
    axios: AxiosInstance;
    isDefault?: boolean;
    isSnakeCase?: boolean; // Auto transform all param keys to snake case before making API requests
}