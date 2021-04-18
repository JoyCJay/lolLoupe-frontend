import { config } from "@/config";
import { getAPI } from "../../utils/request";

const state = (): {
    loading: boolean;
    summoner: any;
    matchesMap: Map<string, any>;
} => ({
    loading: false,
    summoner: null,
    matchesMap: new Map()
});

const getters = {};

const mutations = {
    setLoading(state: any, { loading }) {
        state.loading = loading;
    },
    setChampionsMap(state: any, { summoner }) {
        state.summoner = summoner;
        state.loading = false;
    },
    setMatches(state: any, { matches }) {
        for (const m of matches) {
            state.matchesMap.set(m.meta.gameId, m);
        }
        console.log(state.matchesMap);
        state.loading = false;
    }
};

const actions = {
    async loadSummoner({ commit }, { summonerName }): Promise<void> {
        commit("setLoading", { loading: true });
        const response: any = await getAPI(`/consult/summoner/by-name/${summonerName}`, {});
        const summoner = response.data;
        commit("setChampionsMap", { summoner: summoner });
    },
    async loadMatches({ state, commit }, { pagination }): Promise<void> {
        commit("setLoading", { loading: true });
        const apiUrl = `/consult/matches/${state.summoner.accountId}/${pagination}`;
        const response: any = await getAPI(apiUrl, {});
        commit("setMatches", { matches: response.data });
    }
};


const queryStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export { queryStore };
