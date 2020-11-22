<template>
    <a-tabs size="large">
        <a-tab-pane id="1" key="1" tab="Champions">
            <Champions />
        </a-tab-pane>
        <a-tab-pane id="2" key="2" tab="Items">
            <Items />
        </a-tab-pane>
    </a-tabs>
    <a-back-top />
</template>

<script lang="ts">
import { mapState, useStore } from "vuex";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons-vue";
import Champions from "./wiki/Champions.vue";
import Items from "./wiki/Items.vue";

export default {
    setup() {
        return {};
    },
    components: { Champions, Items },
    data() {
        return {
            championsSubKeys: ["all", "top", "jungle", "mid", "duo", "duo-sup"],
            openKeys: ["champions-sub", "items-sub"]
        };
    },
    computed: {
        ...mapState(["version"])
    }
};
</script>

<style lang="scss" scoped></style>
