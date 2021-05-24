<template>
    <div class="list-container" v-if="matchesMap.size > 0">
        <a-collapse v-model:activeKey="activeKey" :bordered="true" expandIconPosition="right">
            <a-collapse-panel :header="`Match: ${matchKey}`" :disabled="spinning" v-for="[matchKey] in matchesMap.entries()" :key="matchKey">
                <matchDetail :matchId="matchKey"></matchDetail>
            </a-collapse-panel>
        </a-collapse>
        <span>{{ activeKey }}</span>

        <div class="matches-pagination-container">
            <a-pagination v-model:current="currentPagination" :disabled="spinning" :total="25" :pageSize="5" @change="onChange" />
            <a-spin :spinning="spinning"></a-spin>
        </div>
    </div>

    <div v-else>
        Please Search Summoner First
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { mapState, useStore } from "vuex";
import { config } from "../../../config";

import { Options, Vue } from "vue-class-component";
import MatchDetail from "../matches/MatchDetail.vue";

// matches list collapse
const matchesIds: string[] = [];
const activeKey = ref(matchesIds);
function expandAllCurrentMatchesList(matchesIdsRef, matchesMap) {
    const result: string[] = [];
    for (const macheMapiter of matchesMap) {
        result.push(macheMapiter[0]);
    }
    matchesIdsRef.value = result;
}

export default defineComponent({
    setup() {
        const store = useStore();

        console.log("cj debug store", store);

        expandAllCurrentMatchesList(activeKey, store.state.queryStore.matchesMap);
        // pagination
        const currentPagination = ref<number>(1);
        const onChange = async (pageNumber: number) => {
            await store.dispatch("queryStore/loadMatches", { pagination: pageNumber });
            expandAllCurrentMatchesList(activeKey, store.state.queryStore.matchesMap);
        };

        return {
            spinning: computed(() => store.state.queryStore.loading),
            activeKey,
            currentPagination,
            onChange
        };
    },
    components: { MatchDetail },
    data() {
        return {
            roles: ["tank", "fighter", "assassin", "mage", "marksman", "support"]
        };
    },
    computed: {
        ...mapState("staticStore", ["championsMap"]),
        ...mapState("queryStore", ["matchesMap"]),
        roleIcon() {
            return role => {
                return `https://raw.communitydragon.org/${config.version}/plugins/rcp-fe-lol-champion-details/global/default/role-icon-${role}.png`;
            };
        }
    },
    mounted() {
        expandAllCurrentMatchesList(activeKey, this.matchesMap);
    }
});
</script>

<style>
div.list-container {
    height: 100%;
    width: 100%;

    padding: 10px;
    margin: 0;
}

li {
    border: 1px solid yellowgreen;
    margin: 10px;
}

.matches-pagination-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
