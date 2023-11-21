import { Autocomplete, Button, Paper, TextField} from "@mui/material";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
let opt = ["DEL - New Delhi,India","BOM - Mumbai,India","HYD - Hydrabad,India","BLR - Bangalore,India","MAA - Chennai,India","GOI - Goa,India","SIN - Singapore,Singapore","BKK - Bangkok,Thailand","KUL - Kuala Lumpur,Malaysia"];
export default function ActionBar()
{
    return(
        <div style={{display:"flex",alignItems:"center",height:"15vh",width:"175vh",marginTop:150, backgroundColor:"white"}}>
        <Autocomplete
        id="From"
        freeSolo
        sx = {{width : "200px",padding:3, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="From" />}
      />
      <ConnectingAirportsIcon sx={{height:"50vh"}}/>
      <Autocomplete
        id="To"
        freeSolo
        sx = {{width : "200px",padding:3, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="To" />}
      />
      <Autocomplete
        id="From"
        freeSolo
        sx = {{width : "200px",padding:3, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Depature" />}
      />
      <Autocomplete
        id="From"
        freeSolo
        sx = {{width : "200px",padding:3,paddingRight:7, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Return" />}
      />
      <Button variant="contained" color="warning" style={{width:"200px"}}>Submit</Button>
        </div>
    );
}