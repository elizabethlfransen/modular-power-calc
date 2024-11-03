export type BoilerIOData = {
    temperature: number;
    waterIn: number;
    steamOut: number;
}

export type BoilerData = {
    name: string;
    io: BoilerIOData[];
}

export const BOILERS = {
    mk1: {
        name: 'Mk. 1',
        io: [
            {
                temperature: 500,
                waterIn: 45,
                steamOut: 60
            },
            {
                temperature: 750,
                waterIn: 45,
                steamOut: 60
            },
            {
                temperature: 2000,
                waterIn: 45,
                steamOut: 60
            },
        ]
    },
    mk2: {
        name: 'Mk. 2',
        io: [
            {
                temperature: 500,
                waterIn: 45,
                steamOut: 60
            },
            {
                temperature: 750,
                waterIn: 90,
                steamOut: 120
            },
            {
                temperature: 2000,
                waterIn: 450,
                steamOut: 600
            },
        ]
    }
} satisfies Record<string, BoilerData>;