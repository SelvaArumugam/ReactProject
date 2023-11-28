import { Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function Action({from,to,fDate,ADate,pass})
{
    return(
    <div style={{height:"100px",display:"flex",justifyContent:"center" ,padding:"150px", alignItems:"center"}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                    <TableCell>Date and Time Of Depature</TableCell>
                    <TableCell>Date and Time  Of Arrival</TableCell>
                    <TableCell>Number of passengers</TableCell>
                </TableRow>
            </TableHead>
            <TableRow>
                <TableCell>Delhi</TableCell>
                <TableCell>Mumbai</TableCell>
                <TableCell>11-27-2023  00.30</TableCell>
                <TableCell>11-28-2023 02.30</TableCell>
                <TableCell>3</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Delhi</TableCell>
                <TableCell>Mumbai</TableCell>
                <TableCell>11-27-2023  01.30</TableCell>
                <TableCell>11-28-2023 03.05</TableCell>
                <TableCell>3</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Delhi</TableCell>
                <TableCell>Mumbai</TableCell>
                <TableCell>11-27-2023 23.30</TableCell>
                <TableCell>11-28-2023 01.00</TableCell>
                <TableCell>3</TableCell>
            </TableRow>
        </Table>
    </div>
    );
}