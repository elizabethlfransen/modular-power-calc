export type BasicHeaterFuelData = {
    item: string;
    heatPerCycle: number;
    itemConsumptionRate: number;
    co2ProductionRate: number;
};

export type NuclearHeaterFuelData = {
    item: string;
    heatPerCycle: number;
    itemConsumptionRate: number;
    typeOfWaste: string;
    wasteProductionRate: number;
}

export type BasicHeaterData = {
    type: 'basic' | 'solution',
    name: string,
    fuel: BasicHeaterFuelData[],
    maxHeatProduction: number,
}

export type NuclearHeaterData = {
    type: 'nuclear',
    name: string,
    fuel: NuclearHeaterFuelData[],
    maxHeatProduction: number,
}


export type HeaterData = BasicHeaterData | NuclearHeaterData;

export const HEATERS = {
    biomass: {
        name: "Biomass",
        type: 'basic',
        maxHeatProduction: 500,
        fuel: [
            {
                item: "Leaves",
                heatPerCycle: 0.5,
                itemConsumptionRate: 240,
                co2ProductionRate: 30
            },
            {
                item: "Wood",
                heatPerCycle: 1,
                itemConsumptionRate: 36,
                co2ProductionRate: 45
            },
            {
                item: "Mycelia",
                heatPerCycle: 2,
                itemConsumptionRate: 180,
                co2ProductionRate: 45
            },
            {
                item: "Alien Carapace",
                heatPerCycle: 10,
                itemConsumptionRate: 15,
                co2ProductionRate: 30
            },
            {
                item: "Fabric",
                heatPerCycle: 5,
                itemConsumptionRate: 240,
                co2ProductionRate: 30
            },
            {
                item: "Alien Organs",
                heatPerCycle: 10,
                itemConsumptionRate: 15,
                co2ProductionRate: 30
            },
            {
                item: "Biomass",
                heatPerCycle: 20,
                itemConsumptionRate: 20,
                co2ProductionRate: 30
            },
            {
                item: "Solid Biofuel",
                heatPerCycle: 30,
                itemConsumptionRate: 8,
                co2ProductionRate: 30
            },
            {
                item: "Packaged Biofuel",
                heatPerCycle: 35,
                itemConsumptionRate: 4.8,
                co2ProductionRate: 45
            },
            {
                item: "Flower",
                heatPerCycle: 0.25,
                itemConsumptionRate: 36,
                co2ProductionRate: 45
            }
        ]
    },
    coal: {
        name: "Coal",
        type: 'basic',
        maxHeatProduction: 500,
        fuel: [
            {
                item: "Coal",
                heatPerCycle: 10,
                itemConsumptionRate: 15,
                co2ProductionRate: 30
            },
            {
                item: "Petroleum Coke",
                heatPerCycle: 6,
                itemConsumptionRate: 25,
                co2ProductionRate: 30
            },
            {
                item: "Compacted Coal",
                heatPerCycle: 15,
                itemConsumptionRate: 7.143,
                co2ProductionRate: 30
            }
        ]
    },
    solution: {
        name: 'Solution',
        type: 'solution',
        maxHeatProduction: 750,
        fuel: [
            {
                item: "Biofuel",
                heatPerCycle: 25,
                itemConsumptionRate: 12,
                co2ProductionRate: 30
            },
            {
                item: "Fuel",
                heatPerCycle: 30,
                itemConsumptionRate: 12,
                co2ProductionRate: 30
            },
            {
                item: "Turbofuel",
                heatPerCycle: 35,
                itemConsumptionRate: 4,
                co2ProductionRate: 45
            }
        ]
    },
    nuclear: {
        name: 'Nuclear',
        type: 'nuclear',
        maxHeatProduction: 2000,
        fuel: [
            {
                item: "Nuclear Fuel Rods",
                heatPerCycle: 2000,
                itemConsumptionRate: 0.125,
                typeOfWaste: "Nuclear Waste (Vanilla)",
                wasteProductionRate: 6.25
            },
            {
                item: "Plutonium",
                heatPerCycle: 2000,
                itemConsumptionRate: 0.0625,
                typeOfWaste: "Plutonium Waste (Vanilla)",
                wasteProductionRate: 0.625
            },
            {
                item: "Advanced Reactor Cores",
                heatPerCycle: 2000,
                itemConsumptionRate: 0.125,
                typeOfWaste: "Advanced Reactor Casing",
                wasteProductionRate: 0.125
            }
        ]
    }
} satisfies Record<string, HeaterData>;