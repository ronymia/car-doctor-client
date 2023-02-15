import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../layouts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    }
]);