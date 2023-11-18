import { Link } from "react-router-dom";

export default function HomePage()
{
    return(
        <>
        <Link to={"/Login"}>Login</Link>
        <p>dlaksjdlkajdlksjdlkjaslkdjsadkljasd<br></br></p>
        <Link to={"/SignUp"}>SignUp</Link>
        </>
    )
}