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

        <a-layout-footer style="text-align: center">
            Current Version {{ version }}
            <div>
                <button @click="increaseCapacity">+</button>
                <span>Space Left: {{ spacesLeft }} out of {{ capacity }}</span>
            </div>
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import useEventSpace from "./use/event-space";

export default {
    setup(props, context) {
        const { capacity, attendings, spacesLeft, increaseCapacity } = useEventSpace();

        const store = useStore();
        const version = computed(() => store.state.version);

        onMounted(() => {
            // store.dispatch("staticStore/loadChampions");
        });

        return {
            version,
            capacity,
            attendings,
            spacesLeft,
            increaseCapacity
        };
    },
    components: {},
    props: {},
    data() {
        return {
            selectedKeys1: ["1"]
        };
    },
    methods: {
        // null
    },
    computed: {
        // null
    },
    created() {
        // console.log(this["$store"].state.staticStore.count);
        // get("/mock/news", {}, {}).then(res => {
        //     console.log(res);
        // });
        this["$store"].dispatch("staticStore/loadChampions");
        this["$store"].dispatch("staticStore/loadItems");
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
