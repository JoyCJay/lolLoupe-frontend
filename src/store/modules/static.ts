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
const staticStore = {
    namespaced: true,
    state: () => ({
        count: 0
    }),
    getters: {},
    mutations: {
        increment(state: any) {
            // state here is local state
            state.count++;
        }
    },
    actions: {}
};

export { staticStore };
