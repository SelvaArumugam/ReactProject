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
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
export default function NavBar()
{
    return(
        <div style={{height:"7vh"}}>
        <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"}>
               <Link style={{padding:15}} to={"/"}><img src={Icon} height="40px"></img></Link>
               <Link to={"/"} style={{display:"flex"}}><LocalHotelIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} />
               <Typography variant="body1" style={{textDecoration:"underline white",color:"black",paddingTop:20,paddingLeft:4}}>Hotels</Typography></Link>
               <Link to={"/"} style={{display:"flex"}}><LibraryBooksIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} />
               <Typography variant="body1" style={{textDecoration:"underline white",color:"black",paddingTop:20,paddingLeft:4}}>Visa</Typography></Link>
               <Link to={"/"} style={{display:"flex"}}><GroupsIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:4,paddingTop:2}} />
               <Typography variant="body2" style={{textDecoration:"underline white",color:"black",paddingTop:20,paddingLeft:4}}>Group Booking</Typography></Link>
               <Link style={{padding:15}} to={"/"}><img src={plan} height="30px"></img></Link>
            </Stack>
            <Stack direction={"row-reverse"}>
            <Link to={"/Login"} style={{display:"flex" }}><PersonIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:2,paddingTop:2}} />
            <Typography variant="body1" style={{textDecoration:"underline white",color:"black",paddingTop:20,paddingLeft:4,paddingRight:10}}>Aldready an User?</Typography></Link>
            <Link to={"/SignUp"} style={{display:"flex"}}><PersonAddAlt1Icon color="warning" sx={{height:"30px",width:"30px",paddingLeft:2,paddingTop:2}} />
            <Typography variant="body1" style={{textDecoration:"underline white",color:"black",paddingTop:20,paddingLeft:4}}>New User</Typography></Link>
            <Link to={"/"} style={{display:"flex"}}><SupportAgentIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:2,paddingTop:2}} />
            <Typography variant="body1" style={{textDecoration:"underline white",color:"black",paddingTop:20,paddingLeft:4}}>Customer Service</Typography></Link>
            <Link to={"/"} style={{display:"flex"}}><PercentIcon color="warning" sx={{height:"30px",width:"30px",paddingLeft:2,paddingTop:2}} />
            <Typography variant="body1" style={{textDecoration:"underline white",color:"black",paddingTop:20,paddingLeft:4}}>Offers</Typography></Link>
            </Stack>
        </Stack>
        </div>
    );
}