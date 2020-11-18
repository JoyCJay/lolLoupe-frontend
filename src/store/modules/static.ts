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
 * https://raw.communitydragon.org/10.23/game/assets/characters/aatrox/hud/
 */
interface RawChampion {
    id: number;
    name: string;
    alias: string;
    squarePortraitPath: string;
    roles: string[];
}

import { config } from "@/config";
import { getCDN } from "../../utils/request";
const state = () => ({
    count: 0,
    championsMap: {}
});

const getters = {};

const mutations = {
    increment(state: any) {
        state.count++;
    },
    setChampionsMap(state: any, championMap: any) {
        state.championsMap = championMap;
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
                        squarePortraitPath: ele.squarePortraitPath,
                        roles: ele.roles
                    };
                }
            });
            commit("setChampionsMap", championsMap);
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
