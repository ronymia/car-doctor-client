import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../layouts";
import Home from "../../pages/Home/Home/Home";
import { NotFound } from "../../pages/shared";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ],
    },
    {
        path:'*',
        element:<NotFound/>
    }
]);