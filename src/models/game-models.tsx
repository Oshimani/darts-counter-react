
export interface IPlayer {
    id: number;
    name: string;
    score: number;
    dartsThrown: number;
    average: number;
    possibleCheckOut: IPossibleCheckout | null;
}

export interface IPossibleCheckout {
    firstDart: {
        value: number,
        multiplier: 1 | 2 | 3
    },
    secondDart?: {
        value: number,
        multiplier: 1 | 2 | 3
    },
    thirdDart?: {
        value: number,
        multiplier: 1 | 2 | 3
    }
}

export enum CheckOut {
    Straight = 'straight',
    Double = 'double',
    Triple = 'triple'
}
