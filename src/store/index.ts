import { createStore } from "vuex";
import { staticStore } from "./modules/static";

import { config } from "../config";

export default createStore({
    state: {
        version: config.version
    },
    mutations: {},
    actions: {},
    modules: {
        staticStore
    }
});
