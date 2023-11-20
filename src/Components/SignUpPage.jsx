import { Button, InputAdornment, Paper, TextField, Typography } from "@mui/material";

export default function SignUpPage()
{
    return(
        <div  style={{backgroundColor:"gray",height:"100vh" ,display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Paper style={{alignItems:"center"}} variant='elevation' square={false} sx={{height:"650px",width:"700px", display: "flex",flexDirection:"column"}}>
                <Typography variant="h4" sx={{mt:5,mb:4,color:"darkorange"}}>SignUp to BookMyFlight</Typography>
                <div>
                    <TextField label="First Name" style={{paddingRight:4}} color="warning"></TextField>
                    <TextField label="Last Name" color="warning"></TextField>
                </div>
                <TextField  color='warning' sx={{mt:4 , mb:5 ,width: 400, maxWidth: '100%',}}  label="Enter phone number" type={"tel"} 
                    InputProps={{startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                    }}></TextField>
                <TextField color='warning' sx={{ mb:4,width: 400, maxWidth: '100%',}} label="Enter email" type={"email"} ></TextField>
                <TextField color='warning' sx={{ mb:4,width: 400, maxWidth: '100%',}} label="Enter password" type={"password"} ></TextField>
                <Button variant="contained" sx={{width:400}} color="warning">Sign up for free</Button>
                <Typography variant="subtitle2" style={{padding:"60px"}}>By clicking the “Sign up for free” button, you are creating an account, <br/>and agree to BookMyFlights Terms of Service and Privacy Policy.</Typography>
            </Paper>
        </div>
    );
}

//<FormControlLabel  required control={<Checkbox/>} label="Agree to terms and Conditions"></FormControlLabel>