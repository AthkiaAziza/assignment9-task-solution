import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import UpdateProfile from "../components/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('Estate.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            }
        ]
    }
]);

export default router;