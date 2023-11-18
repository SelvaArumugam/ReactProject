import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";


const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "/Login", element: <LoginPage/>},
    {path: "/SignUp",element:<SignUpPage/>}
])

export default router;