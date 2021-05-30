<template>
    <div class="performance-container">
        <div class="col champion-col">
            <!-- <span>{{ playerPerformance.champion }}</span> -->
            <img class="champion-icon" :src="getChampionObj(playerPerformance.champion).squarePortraitPath" alt="championIcon" />
            <span>{{ playerPerformance.summonerName }}</span>
        </div>
        <div class="col spells-col">
            <img class="spell-icon" :src="getSpellObj(playerPerformance.spells[0]).url" alt="spell-1" />
            <img class="spell-icon" :src="getSpellObj(playerPerformance.spells[1]).url" alt="spell-2" />
            <!-- <div>{{ playerPerformance.spells[0] }}</div>
            <div>{{ playerPerformance.spells[1] }}</div> -->
        </div>
        <!-- <div class="col perks-col">perks</div> -->
        <div class="col kda-col">
            {{ playerPerformance.kda }}
        </div>
        <div class="items-grid">
            <!-- {{ playerPerformance.items }} -->
            <div class="item" v-for="(itemId, idx) in playerPerformance.items" :key="idx" :class="{ 'ward-item': idx === 6 }">
                <img class="spell-icon" :src="getItemObj(itemId).iconPath" :alt="itemId" />
                <!-- {{ getItemObj(itemId).name }} -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Spell, PlayerPerformance, RawItem, Ward } from "@/types";
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

        function getItemObj(itemId) {
            const itemsMap: object = store.state.staticStore.itemsMap;
            const wardsMap: Map<number, Ward> = store.state.staticStore.wardsMap;
            const notFoundObj = {
                id: 0,
                name: "not found",
                iconPath: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/gp_ui_placeholder.png"
            };
            let result = itemsMap[itemId];
            if (wardsMap.has(itemId)) {
                result = wardsMap.get(itemId);
            }

            if (itemId === 0) {
                result = notFoundObj;
            }
            // console.log("item", itemId, result);
            return result;
        }

        function getSpellObj(spellId: number) {
            const spellMap: Map<number, Spell> = store.state.staticStore.spellMap;
            return spellMap.has(spellId)
                ? spellMap.get(spellId)
                : {
                      id: 0,
                      name: "not found",
                      url: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/gp_ui_placeholder.png"
                  };
        }

        return {
            getChampionObj,
            getSpellObj,
            getItemObj
        };
    }
});
</script>

<style scoped>
span {
    text-align: center;
}

div.performance-container {
    display: flex;
    height: 100px;
}

div.col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 1px 5px;
}

div.champion-col {
    width: 120px;
}

img.champion-icon {
    border-radius: 50%;
    width: 75px;
}

img.spell-icon {
    margin: 1px;
    width: 40px;
}

div.items-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.item {
    margin: 2px;
    display: flex;
    align-items: center;
    justify-items: center;
}

.ward-item {
    color: red;
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}
</style>
