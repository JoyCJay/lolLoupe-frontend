/**
 * This store charge to load champions and items data.
 * Icons, values, descriptions etc.
 * http://raw.communitydragon.org/
 * https://github.com/CommunityDragon/Docs/blob/master/assets.md
 *
 * #Items:
 * http://raw.communitydragon.org/latest/game/assets/items/icons2d/
 * https://raw.communitydragon.org/10.23/plugins/rcp-be-lol-game-data/global/zh_cn/v1/items.json
 *
 * #Champions:
 * https://raw.communitydragon.org/10.23/plugins/rcp-be-lol-game-data/global/zh_cn/v1/champion-summary.json
 * http://raw.communitydragon.org/10.23/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/
 * https://raw.communitydragon.org/10.23/game/assets/characters/aatrox/hud/
 * 
 * #Perks:
 * https://raw.communitydragon.org/11.8/game/assets/perks/styles/
 * 
 */

import { config } from "@/config";
import { RawChampion, RawItem, Spell, Ward } from "@/types";
import { getCDN } from "../../utils/request";

const state = () => ({
    count: 0,
    championsMap: {},
    itemsMap: {},
    spellMap: new Map<number, Spell>([
        [
            12,
            {
                id: 12,
                name: "teleport",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/summoner_teleport.png`
            }
        ],
        [
            4,
            {
                id: 4,
                name: "flash",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/summoner_flash.png`
            }
        ],
        [
            14,
            {
                id: 14,
                name: "ignite",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/summonerignite.png`
            }
        ],
        [
            7,
            {
                id: 7,
                name: "heal",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/summoner_heal.png`
            }
        ],
        [
            3,
            {
                id: 3,
                name: "exhaust",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/summoner_exhaust.png`
            }
        ],
        [
            6,
            {
                id: 6,
                name: "haste",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/summoner_haste.png`
            }
        ],
        [
            21,
            {
                id: 21,
                name: "barrier",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/summonerbarrier.png`
            }
        ],
        [
            11,
            {
                id: 11,
                name: "smite",
                url: `https://raw.communitydragon.org/${config.version}/game/data/spells/icons2d/smitetracker.png`
            }
        ],
    ]),
    wardsMap: new Map<number, Ward>([
        [3340, {
            id: 3340,
            name: "Stealth Ward",
            iconPath: `https://raw.communitydragon.org/${config.version}/game/assets/items/icons2d/3340_class_t1_wardingtotem.png`
        }],
        [3363, {
            id: 3363,
            name: "Farsight Alteration",
            iconPath: `https://raw.communitydragon.org/${config.version}/game/assets/items/icons2d/3363_class_t1_farsightalteration.png`
        }],
        [3364, {
            id: 3364,
            name: "Oracle Lens",
            iconPath: `https://raw.communitydragon.org/${config.version}/game/assets/items/icons2d/3364_class_t1_oracleslens.png`
        }],
        [3330, {
            id: 3330,
            name: "Scarescrow Effigy",
            iconPath: `https://raw.communitydragon.org/${config.version}/game/assets/items/icons2d/3154_wriggleslantern.png`
        }],
    ])
});

const getters = {};

const mutations = {
    increment(state: any) {
        state.count++;
    },
    setChampionsMap(state: any, { championsMap }) {
        state.championsMap = championsMap;
    },
    setItemsMap(state: any, { itemsMap }) {
        state.itemsMap = itemsMap;
    }
};

const actions = {
    say(context: any, { msg }) {
        console.log(msg);
    },
    loadChampions({ commit }) {
        const championsMap = {};
        getCDN(`/plugins/rcp-be-lol-game-data/global/${config.locale}/v1/champion-summary.json`, {}, {}).then((res: any) => {
            res.data.forEach((ele: RawChampion) => {
                if (ele.id > 0) {
                    championsMap[ele.id] = {
                        name: ele.name,
                        squarePortraitPath: `http://raw.communitydragon.org/${config.version}/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${ele.id}.png`,
                        roles: ele.roles
                    };
                }
            });
            commit("setChampionsMap", { championsMap });
        });
    },
    loadItems({ commit }) {
        const itemsMap = {};
        getCDN(`/plugins/rcp-be-lol-game-data/global/${config.locale}/v1/items.json`, {}, {}).then((res: any) => {
            res.data.forEach((ele: RawItem) => {
                if (!ele.name.startsWith("%i:ornnIcon%") && ele.name && ele.priceTotal > 0) {
                    const fileName = ele.iconPath
                        .split("/")
                        .slice(-1)[0]
                        .toLowerCase();
                    itemsMap[ele.id] = {
                        id: ele.id,
                        name: ele.name,
                        description: ele.description,
                        from: ele.from,
                        to: ele.to,
                        categories: ele.categories,
                        price: ele.price,
                        priceTotal: ele.priceTotal,
                        iconPath: `http://raw.communitydragon.org/${config.version}/game/assets/items/icons2d/${fileName}`
                    };
                }
            });
            commit("setItemsMap", { itemsMap });
        });
    },
    increment({ state, commit }) {
        commit("increment");
    }
};

const staticStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export { staticStore };
