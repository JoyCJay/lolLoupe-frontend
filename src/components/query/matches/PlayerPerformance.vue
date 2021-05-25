<template>
    <div class="performance-container">
        <div class="col champion-col">
            <!-- <span>{{ playerPerformance.champion }}</span> -->
            <img class="champion-icon" :src="getChampionObj(playerPerformance.champion).squarePortraitPath" alt="championIcon" />
            <span>{{ playerPerformance.summonerName }}</span>
        </div>
        <div class="col spells-col">spells</div>
        <div class="col perks-col">perks</div>
        <div class="col kda-col">
            {{ playerPerformance.kda }}
        </div>
        <div class="col items-col">
            {{ playerPerformance.items }}
        </div>
    </div>
</template>

<script lang="ts">
import { Match, PlayerPerformance } from "@/types";
import { mapState, useStore } from "vuex";
import { defineComponent, computed } from "vue";
import { PropType } from "@vue/runtime-core";

export default defineComponent({
    props: {
        playerPerformance: {
            type: Object as PropType<PlayerPerformance>,
            required: true
        }
    },
    setup(props, context) {
        const store = useStore();

        function getChampionObj(champId) {
            return store.state.staticStore.championsMap[parseInt(champId)];
        }

        return {
            getChampionObj
        };
    }
});
</script>

<style scoped>
div.performance-container {
    display: flex;
}

div.col {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 1px;
}

span {
    text-align: center;
}

img.champion-icon {
    border-radius: 50%;
    width: 75px;
}
</style>
