<template>
    <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
    <a-layout id="layout-top-side">
        <a-layout-header class="header">
            <div class="logo">
                <img alt="Vue logo" src="./assets/logo.jpg" />
            </div>
            <a-menu theme="dark" mode="horizontal" v-model:selectedKeys="selectedKeys1" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">
                    nav 1
                </a-menu-item>
                <a-menu-item key="2">
                    nav 2
                </a-menu-item>
                <a-menu-item key="3">
                    nav 3
                </a-menu-item>
            </a-menu>
        </a-layout-header>

        <a-layout-content style="padding: 0 50px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout style="padding: 24px 0; background: #fff">
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu mode="inline" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" style="height: 100%">
                        <a-sub-menu key="sub1">
                            <template v-slot:title>
                                <span><user-outlined />subnav 1</span>
                            </template>
                            <a-menu-item key="1">option1</a-menu-item>
                            <a-menu-item key="2">option2</a-menu-item>
                            <a-menu-item key="3">option3</a-menu-item>
                            <a-menu-item key="4">option4</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub2">
                            <template v-slot:title>
                                <span><laptop-outlined />subnav 2</span>
                            </template>
                            <a-menu-item key="5">option5</a-menu-item>
                            <a-menu-item key="6">option6</a-menu-item>
                            <a-menu-item key="7">option7</a-menu-item>
                            <a-menu-item key="8">option8</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub3">
                            <template v-slot:title>
                                <span><notification-outlined />subnav 3</span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout-content>

        <a-layout-footer style="text-align: center">
            Footer here
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons-vue";

export default {
    data() {
        return {
            selectedKeys1: ["2"],
            selectedKeys2: ["1"],
            openKeys: ["sub1"]
        };
    },
    components: {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined
    }
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

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
