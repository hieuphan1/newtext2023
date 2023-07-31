import { AxiosInstance } from "axios";

export interface todoApiItem {
    id: number;
    title: string;
    description?: string;
    category: { id: number, name: string };
    priority: number;
    status: boolean;
    created_at: Date;
    today_at: String;
}

export interface TodoEntity extends todoApiItem { }

export interface NormalizedTodo {
    todos: { [key: string]: TodoEntity };
}

export interface ApiService {
    name: string;
    axios: AxiosInstance;
    isDefault?: boolean;
    isSnakeCase?: boolean; // Auto transform all param keys to snake case before making API requests
}