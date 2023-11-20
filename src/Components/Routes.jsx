import {createBrowserRouter} from "react-router-dom";
import Body from "./Body";
import Hotels from "./Hotels";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import LogSign from "./LogSign";
import SignUpPage from "./SignUpPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
                {path: "", element: <Body />},
                {path: "Hotels", elemetn:<Hotels/>},
                {path: "Login", element: <LoginPage/>},
                {path: "SignUp",element:<SignUpPage/>},

        ]
      }
])

export default router;