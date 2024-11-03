import {useEffect} from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {useAppData} from "../components/DataProvider.tsx";

export default function Turbines() {
    const {turbines} = useAppData()
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
                            <TableCell variant={'head'}>{turbines.mk1.name}</TableCell>
                            <TableCell>{turbines.mk1.steamConsumption}</TableCell>
                            <TableCell>{turbines.mk1.steamProduction}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>{turbines.mk2.name}</TableCell>
                            <TableCell>{turbines.mk2.steamConsumption}</TableCell>
                            <TableCell>{turbines.mk2.steamProduction}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>)
}