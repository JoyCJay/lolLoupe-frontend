<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" style="height: 100%">
            <a-sub-menu key="champions-sub">
                <template v-slot:title>
                    <span><user-outlined />Champions</span>
                </template>
                <a-menu-item key="1">option1</a-menu-item>
                <a-menu-item key="2">option2</a-menu-item>
                <a-menu-item key="3">option3</a-menu-item>
                <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="items-sub">
                <template v-slot:title>
                    <span><laptop-outlined />Items</span>
                </template>
                <a-menu-item key="5">option5</a-menu-item>
                <a-menu-item key="6">option6</a-menu-item>
                <a-menu-item key="7">option7</a-menu-item>
                <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
    <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
        <div class="about">
            <h1>This is an wiki page</h1>
        </div>
        <router-view />
    </a-layout-content>
</template>

<script lang="ts">
import { UserOutlined, LaptopOutlined } from "@ant-design/icons-vue";

export default {
    data() {
        return {
            selectedKeys1: ["2"],
            selectedKeys2: ["1"],
            openKeys: ["champions-sub", "items-sub"]
        };
    },
    components: {
        UserOutlined,
        LaptopOutlined
    }
};
</script>

<style lang="scss" scoped></style>
