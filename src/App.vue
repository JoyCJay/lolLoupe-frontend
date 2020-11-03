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
                    nav 3
                </a-menu-item>
            </a-menu>
        </a-layout-header>

        <a-layout-content style="padding: 0 50px">
            <a-layout style="padding: 24px 0; background: #fff">
                <router-view />
            </a-layout>
        </a-layout-content>

        <a-layout-footer style="text-align: center">
            Footer here
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons-vue";

export default {
    data() {
        return {
            selectedKeys1: ["2"],
            selectedKeys2: ["1"],
            openKeys: ["sub1"]
        };
    },
    components: {}
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
