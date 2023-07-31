import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Sidebar from "../components/Sidebar/Sidebar";
import TodoListPage from "../pages/todolist/TodoListPage";
import { ProtectedRoute } from "./ProtectedRoute";
import Completed from "../pages/completed/Completed";
import Components from "../pages/Components/Components";
import UserTable from "../pages/user/UserTable";

const routers = createBrowserRouter([
    {
        path: "/Login",
        element: <Login />,
    },
    // {
    //     path: "/Completed",
    //     element: <Completed />,
    // },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Sidebar />
            </ProtectedRoute>
        ),
        errorElement: <h1>error</h1>,
        children: [
            { index: true, element: <Navigate to="/todo" replace /> },
            {
                path: "todo",
                element: (
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "5%" }}>
                        <TodoListPage />
                    </div>
                ),
            },
            {
                path: "completed",
                element: (
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "5%" }}>
                        <Completed />
                    </div>
                ),
            },
            {
                path: "components",
                element: (
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "5%" }}>
                        <Components />
                    </div>
                ),
            },
            {
                path: "user",
                element: (
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "5%" }}>
                        <UserTable />
                    </div>
                ),
            },

        ],
    },
]);


export default routers;