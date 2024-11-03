import {useEffect} from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {TURBINES} from "../config/turbines.ts";

export default function Turbines() {
    useEffect(() => {
        document.title = "Turbines";
    }, []);

    return (<Box>
        <Typography variant="h2">Turbines</Typography>
        <Paper>
            <TableContainer>
                <Table sx={{tableLayout: "fixed"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tier</TableCell>
                            <TableCell>Steam Consumption (High Pressure) (m³)</TableCell>
                            <TableCell>Steam Production (Low Pressure) (m³)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell variant={'head'}>{TURBINES.mk1.name}</TableCell>
                            <TableCell>{TURBINES.mk1.steamConsumption}</TableCell>
                            <TableCell>{TURBINES.mk1.steamProduction}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>{TURBINES.mk2.name}</TableCell>
                            <TableCell>{TURBINES.mk2.steamConsumption}</TableCell>
                            <TableCell>{TURBINES.mk2.steamProduction}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>)
}