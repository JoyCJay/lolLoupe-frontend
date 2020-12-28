<template>
    <ul v-if="matchesMap.size > 0">
        <li v-for="[matchKey] in matchesMap.entries()" :key="matchKey">
            <!-- <div v-for="(p, pIdx) in matchValue.bluePlayers" :key="pIdx">
                {{ p.summonerName }}
            </div>
            <div v-for="(p, pIdx) in matchValue.redPlayers" :key="pIdx">
                {{ p.summonerName }}
            </div> -->
            <matchDetail :matchId="matchKey"></matchDetail>
        </li>
    </ul>

    <div v-else>
        pls search summoner
    </div>
</template>

<script>
import { computed } from "vue";
import { mapState, useStore } from "vuex";
import { config } from "../../../config";

import { Options, Vue } from "vue-class-component";
import MatchDetail from "../matches/MatchDetail.vue";

@Options({
    setup() {
        return {};
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
        },
        objectedMap() {
            const obj = {};
            return obj;
        }
    }
})
export default class MachesList extends Vue {}
</script>

<style>
/* sdf */
</style>
