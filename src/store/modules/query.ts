import { config } from "@/config";
import { getAPI } from "../../utils/request";

interface Summoner {
    accountId: string;
    id: string;
    name: string;
    profileIconId: number;
    puuid: string;
    revisionDate: number;
    summonerLevel: number;
}

const state = () => ({
    loading: false,
    summoner: null
});

const getters = {};

const mutations = {
    setLoading(state: any, { loading }) {
        state.loading = loading;
    },
    setChampionsMap(state: any, { summoner }) {
        state.summoner = summoner;
        state.loading = false;
    }
};

const actions = {
    async loadSummoner({ commit }, { summonerName }): Promise<void> {
        commit("setLoading", { loading: true });
        const response: any = await getAPI(`/consult/summoner/by-name/${summonerName}`, {});
        const summoner = response.data;
        commit("setChampionsMap", { summoner: summoner });
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
