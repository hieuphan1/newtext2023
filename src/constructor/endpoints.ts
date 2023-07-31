const API_HOST = "http://localhost:8080/";
const API_URL = "api/auth/";

export const ENDPOINTS = {
    LIST_ARTIST: `${API_HOST + API_URL}artists`, // get, post, put, delete
    ADD_ARTISTS: `${API_HOST + API_URL}Admin/AddArtists`,
    BOOKS: "books",
    TODO: "todos",
    AUTH: "auth",
    CATEGORIES: "categories",
    USER: "users",
};
