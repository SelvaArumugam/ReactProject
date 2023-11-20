import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Icon from "./Images/Icon.png";
import plan from "./Images/plan.png";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import PercentIcon from '@mui/icons-material/Percent';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
export default function NavBar()
{
    return(
        <div style={{height:"7vh"}}>
        <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"}>
               <Link style={{padding:15}} to={"/"}><img src={Icon} height="40px"></img></Link>
               <Link to={"/"}><LocalHotelIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} /></Link>
               <Typography variant="body1" style={{paddingTop:20,paddingLeft:4}}>Hotels</Typography>
               <Link to={"/"}><LibraryBooksIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} /></Link>
               <Typography variant="body1" style={{paddingTop:20,paddingLeft:4}}>Visa</Typography>
               <Link to={"/"}><GroupsIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} /></Link>
               <Typography variant="body2" style={{paddingTop:20,paddingLeft:4}}>Group Booking</Typography>
               <Link style={{padding:15}} to={"/"}><img src={plan} height="30px"></img></Link>
            </Stack>
            <Stack direction={"row-reverse"}>
            <Typography variant="body1" style={{paddingTop:20,paddingLeft:4,paddingRight:10}}>Login/SignUp</Typography>
            <Link to={"/Login"}><PersonIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} /></Link>
            <Typography variant="body1" style={{paddingTop:20,paddingLeft:4}}>Customer Service</Typography>
            <Link to={"/"}><SupportAgentIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} /></Link>
            <Typography variant="body1" style={{paddingTop:20,paddingLeft:4}}>Offers</Typography>
            <Link to={"/"}><PercentIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} /></Link>
            </Stack>
        </Stack>
        </div>
    );
}