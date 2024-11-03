import data from "../data.json";
import {createContext, useContext} from "react";

export type BoilerIOData = {
    temperature: number;
    waterIn: number;
    steamOut: number;
}

export type BoilerData = {
    name: string;
    io: BoilerIOData[];
}


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

export type ChimneyData = {
    "name": string,
    "fluid": string,
    "consumptionRate": number
}

export type GeneratorData = {
    "maxPowerOutput": number,
    "requiredRPM": number
}

export type TurbineData = {
    "name": string,
    "maxRpm": number,
    "steamConsumption": number,
    "steamProduction": number
}

export type HeaterData = BasicHeaterData | NuclearHeaterData;

export interface AppData {
    boilers: Record<string, BoilerData>
    chimneys: Record<string, ChimneyData>
    generators: Record<string, GeneratorData>
    heaters: Record<string, HeaterData>
    turbines: Record<string, TurbineData>
}


export const AppDataContext = createContext(data.versions.latest as AppData);

export const useAppData = () => useContext(AppDataContext)