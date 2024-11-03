import {useEffect} from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {useAppData} from "../components/DataProvider.tsx";

export default function Chimneys() {
    const {chimneys} = useAppData()

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
                            <TableCell variant={'head'}>{chimneys.co2.name}</TableCell>
                            <TableCell>{chimneys.co2.fluid}</TableCell>
                            <TableCell>{chimneys.co2.consumptionRate}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>{chimneys.steam.name}</TableCell>
                            <TableCell>{chimneys.steam.fluid}</TableCell>
                            <TableCell>{chimneys.steam.consumptionRate}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>)
}