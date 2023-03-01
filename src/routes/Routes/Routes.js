import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../layouts";
import { Home } from "../../pages";
import { Login, Register } from "../../pages/Auth";
import { ErrorPage } from "../../pages/shared";

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
        element:<ErrorPage/>
    }
]);