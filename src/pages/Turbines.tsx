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
                            <TableCell width="auto"></TableCell>
                            <TableCell>Mk. 1</TableCell>
                            <TableCell>Mk. 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell width="auto" variant={'head'}>Maximum RPM</TableCell>
                            <TableCell>{TURBINES.mk1.maxRpm}</TableCell>
                            <TableCell>{TURBINES.mk2.maxRpm}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width="auto" variant={'head'}>Steam Consumption (High Pressure) (m³)</TableCell>
                            <TableCell>{TURBINES.mk1.steamConsumption}</TableCell>
                            <TableCell>{TURBINES.mk2.steamConsumption}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width="auto" variant={'head'}>Steam Production (Low Pressure) (m³)</TableCell>
                            <TableCell>{TURBINES.mk1.steamProduction}</TableCell>
                            <TableCell>{TURBINES.mk2.steamProduction}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>)
}