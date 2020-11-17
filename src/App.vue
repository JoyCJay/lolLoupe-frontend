<template>
    <a-layout id="layout-top-side">
        <a-layout-header class="header">
            <div class="logo">
                <img alt="Vue logo" src="./assets/logo.jpg" />
            </div>
            <a-menu theme="dark" mode="horizontal" v-model:selectedKeys="selectedKeys1" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">
                    <router-link :to="{ name: 'Home', query: {} }">Home</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link :to="{ name: 'Wiki', query: {} }">Wiki</router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <router-link :to="{ name: 'Wiki', query: {} }">Query</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-header>

        <a-layout-content style="padding: 0 50px">
            <a-layout style="padding: 24px 0; background: #fff">
                <router-view />
            </a-layout>
        </a-layout-content>

        <a-layout-footer style="text-align: center"> Current Version {{ version }} </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { get, getCDN } from "./utils/request";
export default {
    components: {},
    data() {
        return {
            selectedKeys1: ["2"]
        };
    },
    computed: {
        ...mapState(["version"]),
        ...mapState("staticStore", ["count"])
    },
    mounted() {
        get("/mock/news").then(res => {
            console.log(res);
        });
        getCDN("/plugins/rcp-be-lol-game-data/global/en_gb/v1/champion-summary.json").then(res => {
            console.log(res);
        });
    }
};
</script>

<style lang="scss">
#layout-top-side .logo {
    width: 120px;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    margin: 0 18px;
    float: left;
    img {
        width: 100%;
    }
}
</style>
