/**
 * This store charge to load champions and items data.
 * Icons, values, descriptions etc.
 * http://raw.communitydragon.org/
 * https://github.com/CommunityDragon/Docs/blob/master/assets.md
 */
const staticStore = {
    namespaced: true,
    state: () => ({
        count: 0
    }),
    getters: {
    
    },
    mutations: {
        increment (state:any ) { // 这里的 `state` 对象是模块的局部状态
            state.count++
        }
    },
    actions: {

    }
}

export { staticStore }