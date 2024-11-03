import {useEffect} from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {GENERATORS} from "../config/generators.ts";

export default function Generators() {
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
                            <TableCell>{GENERATORS.lv.maxPowerOutput}</TableCell>
                            <TableCell>{GENERATORS.lv.requiredRPM}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>MV</TableCell>
                            <TableCell>{GENERATORS.mv.maxPowerOutput}</TableCell>
                            <TableCell>{GENERATORS.mv.requiredRPM}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant={'head'}>HV</TableCell>
                            <TableCell>{GENERATORS.hv.maxPowerOutput}</TableCell>
                            <TableCell>{GENERATORS.hv.requiredRPM}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>)
}