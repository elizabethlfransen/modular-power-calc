import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {BasicHeaterFuelData, HeaterData, HEATERS, NuclearHeaterFuelData} from "../config/heaters.ts";

function BasicHeaterFuelRow(dataRow: BasicHeaterFuelData) {
    return (<TableRow>
        <TableCell>{dataRow.item}</TableCell>
        <TableCell>{dataRow.heatPerCycle}</TableCell>
        <TableCell>{dataRow.itemConsumptionRate}</TableCell>
        <TableCell>{dataRow.co2ProductionRate}</TableCell>
    </TableRow>)
}

function NuclearHeaterFuelRow(dataRow: NuclearHeaterFuelData) {
    return (<TableRow>
        <TableCell>{dataRow.item}</TableCell>
        <TableCell>{dataRow.heatPerCycle}</TableCell>
        <TableCell>{dataRow.itemConsumptionRate}</TableCell>
        <TableCell>{dataRow.typeOfWaste}</TableCell>
        <TableCell>{dataRow.wasteProductionRate}</TableCell>
    </TableRow>)
}

type HeaterFuelRowProps = Pick<HeaterData, 'type'> & { fuelRow: BasicHeaterFuelData | NuclearHeaterFuelData };

function HeaterFuelRow({type, fuelRow}: HeaterFuelRowProps) {
    if (type === 'nuclear') {
        return <NuclearHeaterFuelRow {...(fuelRow as NuclearHeaterFuelData)} />
    }
    return <BasicHeaterFuelRow {...(fuelRow as BasicHeaterFuelData)} />
}

function BasicHeaterTableHeader() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Heat / Cycle</TableCell>
                <TableCell>Item Consumption Rate</TableCell>
                <TableCell>CO₂ production rate (m³)</TableCell>
            </TableRow>
        </TableHead>
    )
}

function SolutionHeaterTableHeader() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Heat / Cycle</TableCell>
                <TableCell>Item Consumption Rate (m³)</TableCell>
                <TableCell>CO₂ production rate (m³)</TableCell>
            </TableRow>
        </TableHead>
    )
}

function NuclearHeaterTableHeader() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Heat / Cycle</TableCell>
                <TableCell>Item Consumption Rate</TableCell>
                <TableCell>Type of Waste</TableCell>
                <TableCell>Waste Production Rate</TableCell>
            </TableRow>
        </TableHead>
    )
}

function HeaterFuelTableHeader({type}: Pick<HeaterData, 'type'>) {
    switch (type) {
        case "basic":
            return <BasicHeaterTableHeader/>
        case "solution":
            return <SolutionHeaterTableHeader/>
        case "nuclear":
            return <NuclearHeaterTableHeader/>
    }
}

type HeaterDataDisplayProps = {
    id: string
    heaterData: HeaterData
}

function HeaterDataDisplay({id, heaterData: {name, fuel, type}}: HeaterDataDisplayProps) {
    return (
        <Box id={id} sx={{
            py: 2
        }}>
            <Typography variant="h3">{name}</Typography>
            <Paper>
                <TableContainer>
                    <Table>
                        <HeaterFuelTableHeader type={type}/>
                        <TableBody>
                            {
                                fuel.map(fuelRow => <HeaterFuelRow key={fuelRow.item} type={type} fuelRow={fuelRow}/>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default function Heaters() {
    return (
        <Box>
            <Typography variant="h2">Heaters</Typography>
            <Box>
                {
                    Object.entries(HEATERS)
                        .map(([key, heaterData]) => <HeaterDataDisplay id={key} key={key} heaterData={heaterData}/>)
                }
            </Box>
        </Box>
    );
}