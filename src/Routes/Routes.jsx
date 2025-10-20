import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import ErrorAppNotFound from "../Pages/ErrorAppNotFound";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorAppNotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/apps',
                element: <Apps/>
            },
            {
                path: '/app-details',
                element: <AppDetails/>
            },
            {
                path: '/installation',
                element: <Installation/>
            },
        ]
    }
])

export default router