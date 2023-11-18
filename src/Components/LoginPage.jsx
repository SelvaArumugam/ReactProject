import {Box, Button, Checkbox, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import { useState } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InputAdornment from '@mui/material/InputAdornment';
export default function LoginPage()
{
    let [type,setType] = useState("Email");
    let [info,setInfo] = useState("");
    function handleType()
    {
        type == "Email" ? setType("Phone") : setType("Email");
        setInfo("")
    }
    return(
        <div  style={{backgroundColor:"gray",height:"100vh" ,display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Paper variant='elevation' square={false} sx={{height:"600px",width:"850px", display: "flex"}}>
                <div style={{height:"600px", backgroundColor:"darkorange",width:"35vh",}}>
                <div style={{display:"flex"}}>
                <SecurityIcon sx={{height:"60px",ml:6,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Trusted by over <br/> 100 million users</Typography>
                </div>
                <div style={{display:"flex"}}>
                <PaymentsIcon sx={{height:"60px",ml:6,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Fast and <br/> Secure Payments</Typography>
                </div>
                <div style={{display:"flex"}}>
                <CurrencyRupeeIcon sx={{height:"60px",ml:6,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Save on Every <br/> Booking</Typography>
                </div>
                <div style={{display:"flex"}}>
                <BusinessCenterIcon sx={{height:"60px",ml:6,mt:7,mr:1, width:"60px",}}/>
                <Typography variant='h' sx={{mt:8}}>Manage Trips,fare alerts & predictions</Typography>
                </div>
                </div>
                <form style={{padding:"50px"}}>
                    <Typography  variant='h5' sx={{color:"darkorange", mb:2}}>Login to BookMyFlight</Typography>
                    <RadioGroup  name="login-Type" value = {type} onChange={handleType}>
                        <FormControlLabel value ="Phone" control={<Radio/>} label={"Mobile Number"}></FormControlLabel>
                        <FormControlLabel value = "Email" control={<Radio/>} label={"Email"}></FormControlLabel>
                    </RadioGroup>
                    {type == "Phone" ?  <TextField value={info} onChange={(event) =>setInfo(event.target.value)} color='warning' sx={{mt:5 , mb:5}}  label="Enter phone number" type={"tel"} fullWidth variant='standard' 
                    InputProps={{startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                    }}></TextField> :
                    <TextField color='warning' onChange={(event) =>setInfo(event.target.value)} sx={{mt:5 , mb:5}} label="Enter email" type={"email"} fullWidth variant='standard' ></TextField>
                    }
                    <Button sx={{mb:5}} fullWidth variant='contained' color='warning'>Login</Button>
                    <Typography variant='subtitle2'>By logging in, I understand & agree to ixigo terms of use and privacy policy*.</Typography>
                </form>
            </Paper>
        </div>
    );
}


function Login()
{
    return(
        <Box sx={{width:"100%",height:"100vh", display: "flex", alignItems: "center"}}>
            <Grid container justifyContent={"center"} padding="3">
                <Grid item xs={2.5} style={{height:"500px",backgroundColor:"darkorange"}}></Grid>
                <Grid item xs={4} style={{height:"500px",backgroundColor:"grey", padding: "16px" }}>
                <Box component="form" noValidate  sx={{ mt: 3 }}>                        
                <Grid container spacing={2}> 
                    <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                       <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        />
                    </Grid>                           
                        <Grid item xs={"12"}>
                                <TextField fullWidth required label={"Phone number or Email"}></TextField>
                            </Grid>
                            <Grid item xs={"12"}>
                                <TextField fullWidth required label={"Password"}></TextField>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
}




