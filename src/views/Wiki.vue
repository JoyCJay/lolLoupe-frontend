<template>
    <div>
        This is a wiki page
    </div>

    <div>
        <a-tabs size="large">
            <a-tab-pane id="1" key="1" tab="Champions">
                <Champions />
            </a-tab-pane>
            <a-tab-pane id="2" key="2" tab="Items">
                Content of Tab Pane 2
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { mapState, useStore } from "vuex";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons-vue";
import Champions from "./wiki/Champions.vue";

export default {
    setup() {
        return {};
    },
    components: { Champions },
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
