import { createStore } from "vuex";
import { staticStore } from "./modules/static";
import { queryStore } from "./modules/query";

import { config } from "../config";

export default createStore({
    state: {
        version: config.version
    },
    mutations: {},
    actions: {},
    modules: {
        staticStore,
        queryStore
    }
});
