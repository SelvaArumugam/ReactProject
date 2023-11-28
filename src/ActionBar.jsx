import { Autocomplete, Button, TextField} from "@mui/material";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { Link } from "react-router-dom";
let opt = ["DEL - New Delhi,India","BOM - Mumbai,India","HYD - Hydrabad,India","BLR - Bangalore,India","MAA - Chennai,India","GOI - Goa,India","SIN - Singapore,Singapore","BKK - Bangkok,Thailand","KUL - Kuala Lumpur,Malaysia"];
let num = [1,2,3,4];
export default function ActionBar()
{
    return(
        <div style={{display:"flex",alignItems:"center",height:"15vh",width:"175vh",marginTop:150, backgroundColor:"white"}}>
        <Autocomplete
        id="From"
        freeSolo
        sx = {{width : "200px",padding:2, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="From" />}
      />
        <ConnectingAirportsIcon sx={{height:"50vh"}}/>
      <Autocomplete
        id="To"
        freeSolo
        sx = {{width : "200px",padding:2, color:"darkorange"}}
        options={opt.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="To" />}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDateRangePicker  calendars={1} slotProps={{
              textField: ({ position }) => ({
              label: position === 'start' ? 'Departure' : 'Return',
            }),
          }}/>
      </LocalizationProvider>
      <Autocomplete
        id="From"
        freeSolo
        sx = {{width : "200px",padding:1,paddingRight:3,paddingLeft:2, color:"darkorange"}}
        options={num.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Number of Passengers" />}
      />
      <Link to="/Result"><Button variant="contained"  color="warning" style={{width:"200px"}}>Submit</Button></Link>
        </div>
    );
}