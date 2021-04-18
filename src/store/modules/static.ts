/**
 * This store charge to load champions and items data.
 * Icons, values, descriptions etc.
 * http://raw.communitydragon.org/
 * https://github.com/CommunityDragon/Docs/blob/master/assets.md
 *
 *
 * #Items:
 * http://raw.communitydragon.org/latest/game/assets/items/icons2d/
 * https://raw.communitydragon.org/10.23/plugins/rcp-be-lol-game-data/global/zh_cn/v1/items.json
 *
 * #Champions:
 * https://raw.communitydragon.org/10.23/plugins/rcp-be-lol-game-data/global/zh_cn/v1/champion-summary.json
 * http://raw.communitydragon.org/10.23/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/
 * https://raw.communitydragon.org/10.23/game/assets/characters/aatrox/hud/
 */

import { config } from "@/config";
import { RawChampion, RawItem } from "@/types";
import { getCDN } from "../../utils/request";

const state = () => ({
    count: 0,
    championsMap: {},
    itemsMap: {}
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
