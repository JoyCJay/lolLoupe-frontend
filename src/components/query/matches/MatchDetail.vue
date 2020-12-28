<template>
    <h1>MatchDetail works</h1>
    <div>match id : {{ matchId }}</div>
</template>

<script>
import { computed } from "vue";
import { mapState, useStore } from "vuex";
import { config } from "../../../config";

import { Options, Vue } from "vue-class-component";

@Options({
    setup() {
        return {};
    },
    props: {
        matchId: String
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
})
export default class MatchDetail extends Vue {}
</script>

<style>
/* sdf */
</style>
