<template>
    <div class="about">
        <!-- <h1>This is an champion page</h1> -->
        <a-descriptions size="small" :column="6" style="text-align: center">
            <a-descriptions-item v-for="(role, idx) in roles" :key="idx" :label="role">
                <a-avatar :size="48" shape="square" :src="roleIcon(role)" />
            </a-descriptions-item>
        </a-descriptions>

        <div style="background-color: #ecf0f1; padding: 20px;">
            <a-row :gutter="20">
                <a-col :span="3" v-for="(champion, id) in championsMap" :key="id" class="chapion-card-container">
                    <a-card :bordered="false">
                        <template #cover>
                            <img alt="example" :src="champion.squarePortraitPath" />
                        </template>
                        <a-card-meta class="meta">
                            <template #title>
                                <span>{{ champion.name }}</span>
                            </template>

                            <template #description>
                                <a-avatar class="roleIcon" :size="24" shape="square" v-for="(r, idx) in champion.roles" :key="idx" :src="roleIcon(r)" />
                            </template>
                        </a-card-meta>
                    </a-card>
                </a-col>
                <a-divider />
            </a-row>
        </div>
    </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { mapState, useStore } from "vuex";
import { config } from "../../config";

export default {
    setup() {
        return {};
    },
    data() {
        return {
            roles: ["tank", "fighter", "assassin", "mage", "marksman", "support"]
        };
    },
    computed: {
        ...mapState("staticStore", ["championsMap"]),
        roleIcon() {
            return role => {
                return `https://raw.communitydragon.org/${config.version}/plugins/rcp-fe-lol-champion-details/global/default/role-icon-${role}.png`;
            };
        }
    }
};
</script>

<style scoped>
.chapion-card-container {
    padding: 20px;
}
.roleIcon {
    margin: 5px;
}
.meta {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
