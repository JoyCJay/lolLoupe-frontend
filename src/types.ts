export interface Champion {
    id: number;
    name: string;
    tittle: string
}

export interface Summoner {
    accountId: string;
    id: string;
    name: string;
    profileIconId: number;
    puuid: string;
    revisionDate: number;
    summonerLevel: number;
}

export interface Match {
    meta: any;
    bluePlayers: any;
    redPlayers: any;
}

export interface RawChampion {
    id: number;
    name: string;
    alias: string;
    squarePortraitPath: string;
    roles: string[];
}

export interface RawItem {
    id: number;
    name: string;
    description: string;
    from: number[];
    to: number[];
    categories: string[];
    price: number;
    priceTotal: number;
    iconPath: string;
}