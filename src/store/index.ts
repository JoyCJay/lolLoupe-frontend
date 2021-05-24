import { createStore } from "vuex";
import { staticStore } from "./modules/static";
import { queryStore } from "./modules/query";

import { config } from "../config";

export default createStore({
    state: {
        version: config.version
    },
    mutations: {
        testMutation(state, payload) {
            console.log('testMutation', state, payload);
        }
    },
    actions: {
        testAction(ctx, payload) {
            console.log('testAction', ctx, payload);
        }
    },
    modules: {
        staticStore,
        queryStore
    }
});
