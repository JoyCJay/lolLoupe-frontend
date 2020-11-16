import { createStore } from "vuex";
import { staticStore } from "./modules/static";

export default createStore({
    state: {
        version: "10.23.1"
    },
    mutations: {},
    actions: {},
    modules: {
        staticStore
    }
});
