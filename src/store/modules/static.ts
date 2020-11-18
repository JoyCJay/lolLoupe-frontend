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
import { getCDN } from "../../utils/request";
const state = () => ({
    count: 0
})

const getters = {

};

const mutations = {
    increment(state: any) {
        state.count++;
    }
};

const actions = {
    hello() {
        console.log("hello")
    },
    loadData() {
        getCDN("/plugins/rcp-be-lol-game-data/global/en_gb/v1/champion-summary.json", {}, {}).then(res => {
            console.log(res);
        });
    },
    increment ({ state, commit }) {
        commit('increment');
        console.log(state);
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
