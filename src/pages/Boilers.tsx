import {Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {useEffect} from "react";
import {BoilerData, BoilerIOData, useAppData} from "../components/DataProvider.tsx";

function BoilerDataRow({steamOut, temperature, waterIn}: BoilerIOData) {
    return (<TableRow>
        <TableCell>{temperature}</TableCell>
        <TableCell>{waterIn}</TableCell>
        <TableCell>{steamOut}</TableCell>
    </TableRow>)
}

function BoilerDataDisplay({id, boilerData: {name, io}}: { id: string, boilerData: BoilerData }) {
    return (<Box id={id} sx={{
        py: 2
    }}>
        <Typography variant="h3">{name}</Typography>
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Temperature</TableCell>
                        <TableCell>Water In</TableCell>
                        <TableCell>Steam Out</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {io.map((row, index) => <BoilerDataRow key={index} {...row}/>)}
                </TableBody>
            </Table>
        </Paper>
    </Box>)
}

export default function Boilers() {
    useEffect(() => {
        document.title = "Boilers";
    }, []);

    const {boilers} = useAppData()


    return (<Box>
        <Typography variant="h2">Boilers</Typography>
        {
            Object.entries(boilers).map(([key, boilerData]) => (
                <BoilerDataDisplay key={key} id={key} boilerData={boilerData}/>))
        }
    </Box>)
}