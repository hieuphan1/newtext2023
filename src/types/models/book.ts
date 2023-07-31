import { AxiosInstance } from "axios";

export interface BookApiItem {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
}

export interface BookEntity extends BookApiItem { }

export interface NormalizedBook {
    books: { [key: string]: BookEntity };
}

export interface ApiService {
    name: string;
    axios: AxiosInstance;
    isDefault?: boolean;
    isSnakeCase?: boolean; // Auto transform all param keys to snake case before making API requests
}