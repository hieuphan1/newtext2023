import { Navigate } from "react-router-dom";

interface props {
    children: any
}

export const ProtectedRoute = ({ children }: props) => {
    const isLoggedIn = localStorage.getItem('Login');
    if (!isLoggedIn) {
        // user is not authenticated
        return <Navigate to="/Login" />;
    }
    return children;
};