import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../layouts";
import { Home, Login } from "../../pages";
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
                path: '/login',
                element: <Login />
            }
        ],
    },
    {
        path:'*',
        element:<NotFound/>
    }
]);