import { config } from "@/config";

const state = () => ({
    count: 0,
    championsMap: {},
    itemsMap: {}
});

const getters = {};

const mutations = {};

const actions = {};

const queryStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export { queryStore };
