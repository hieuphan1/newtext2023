import { AxiosInstance } from "axios";

export interface CategoriesApiItem {
    id: number;
    name: string;
}

export interface CategoriesEntity extends CategoriesApiItem { }

export interface NormalizedCategories {
    categories: { [key: string]: CategoriesEntity };
}

export interface ApiService {
    name: string;
    axios: AxiosInstance;
    isDefault?: boolean;
    isSnakeCase?: boolean; // Auto transform all param keys to snake case before making API requests
}