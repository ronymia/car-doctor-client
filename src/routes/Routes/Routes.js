import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../layouts";
import { Home, Login } from "../../pages";
import Register from "../../pages/Auth/Register/Register";
import { NotFound } from "../../pages/shared";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ],
    },
    {
        path:'*',
        element:<NotFound/>
    }
]);