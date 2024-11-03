import {useEffect} from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {useAppData} from "../components/DataProvider.tsx";

export default function Generators() {

    const {generators} = useAppData();

    useEffect(() => {
        document.title = "Generators";
    }, []);

    return (<Box>
        <Typography variant="h2">Generators</Typography>
        <Paper>
            <TableContainer>
                <Table sx={{tableLayout: "fixed"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tier</TableCell>
                            <TableCell>Maximum Power Output (MW)</TableCell>
                            <TableCell>Required RPM</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell variant={'head'}>LV</TableCell>
                            <TableCell>{generators.lv.maxPowerOutput}</TableCell>
                            <TableCell>{generators.lv.requiredRPM}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>MV</TableCell>
                            <TableCell>{generators.mv.maxPowerOutput}</TableCell>
                            <TableCell>{generators.mv.requiredRPM}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>HV</TableCell>
                            <TableCell>{generators.hv.maxPowerOutput}</TableCell>
                            <TableCell>{generators.hv.requiredRPM}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>)
}