import {useEffect} from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {CHIMNEYS} from "../config/chimneys.ts";

export default function Chimneys() {
    useEffect(() => {
        document.title = "Chimneys";
    }, []);

    return (<Box>
        <Typography variant="h2">Chimneys</Typography>
        <Paper>
            <TableContainer>
                <Table sx={{tableLayout: "fixed"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Fluid Consumed</TableCell>
                            <TableCell>Consumption Rate (m³)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell variant={'head'}>{CHIMNEYS.co2.name}</TableCell>
                            <TableCell>{CHIMNEYS.co2.fluid}</TableCell>
                            <TableCell>{CHIMNEYS.co2.consumptionRate}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>{CHIMNEYS.steam.name}</TableCell>
                            <TableCell>{CHIMNEYS.steam.fluid}</TableCell>
                            <TableCell>{CHIMNEYS.steam.consumptionRate}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>)
}