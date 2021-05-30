<template>
    <div class="match-meta">
        <h1>match id : {{ matchId }}</h1>
        {{ matchMeta }}
    </div>
    <div class="teams-performance">
        <div class="team blue-team">
            <ul>
                <li v-for="(bluePlayer, idx) in bluePlayers" :key="idx">
                    <playerPerformance :playerPerformance="bluePlayer"></playerPerformance>
                </li>
            </ul>
        </div>

        <div class="team red-team">
            <!-- red team -->
            <!-- <div class="ag-grid-container">
                <ag-grid-vue style="height: 100%" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="rowData"> </ag-grid-vue>
            </div> -->
            <ul>
                <li v-for="(redPlayer, idx) in redPlayers" :key="idx">
                    <playerPerformance :playerPerformance="redPlayer"></playerPerformance>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { mapState, useStore } from "vuex";
import PlayerPerformance from "./PlayerPerformance.vue";

import { Options, Vue } from "vue-class-component";
import { Match } from "@/types";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

export default defineComponent({
    props: {
        matchId: String
    },
    setup(props, context) {
        const store = useStore();

        const match: Match = store.state.queryStore.allMatchesMap.get(props.matchId);
        const matchMeta = match.meta;
        const bluePlayers = match.bluePlayers;
        const redPlayers = match.redPlayers;

        const columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];
        const rowData = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];

        return {
            matchMeta,
            bluePlayers,
            redPlayers,

            columnDefs,
            rowData
        };
    },
    components: { PlayerPerformance, AgGridVue }
});
</script>

<style scoped>
.teams-performance {
    display: flex;
}

.team {
    display: flex;
    justify-content: center;
    flex: 1 1 50%;
}

ul {
    list-style-type: none;
    width: 100%;
    margin: 0;
    padding: 0;
}

li {
    border: 1px solid yellowgreen;
    margin: 10px 0;
    width: 100%;
}

div.ag-grid-container {
    height: 300px;
    width: 100%;
}
</style>
