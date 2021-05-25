export interface Champion {
    id: number;
    name: string;
    tittle: string
}

// Wiki page URL segement: ./wiki
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

// Match Info URL segement: ./query
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
    meta: MatchMeta;
    bluePlayers: PlayerPerformance[];
    redPlayers: PlayerPerformance[];
}

export interface MatchMeta {
    date: string; // "2021-05-23 18:04:25"
    duration: string; // "36 mins"
    gameId: string; // "5284285375"
    winTeam: string; // "Red"
}

export interface PlayerPerformance {
    accountId: string; // "DBLm7_Fkey7oRDcXxR94t2FnClcUSblEb8k4wBHIlkqdUA"
    champion: string; // "33"
    dmg: number; // 17030
    dmgTaken: number; // 32991
    gold: number; // 9950
    items: number[]; //  [6664, 3075, 3001, 3047, 0, 0, 3364]
    kda: string; // "2-9-17"
    lane: string; // "JUNGLE"
    largestMultiKill: number; //  1
    spells: number[]; //  [6, 11]
    summonerName: string; // "xxEricktia"
    totalMinionsKilled: number; // 42
    turretKills: number; // 0
    visionScore: number; // 22
}
