<template>
    <a-row class="my-card search-container">
        <a-col :span="20" v-if="summoner">
            <a-descriptions size="default" :column="1" style="text-align: left">
                <a-descriptions-item v-for="(value, key) in summoner" :key="key" :label="key">
                    {{ value }}
                </a-descriptions-item>
            </a-descriptions>
        </a-col>

        <a-col :span="summoner ? 4 : 24">
            <a-input-search v-model:value="searchName" placeholder="Input summoner name" size="large" enter-button @search="onSearch" :loading="loading" />
        </a-col>
    </a-row>

    <a-row type="flex" justify="center" align="top">
        <a-col :span="6">
            <div class="my-card solo-rank-card">
                <soloRank></soloRank>
            </div>

            <div class="my-card flex-rank-card">
                <flexRank></flexRank>
            </div>

            <div class="my-card rank-champions-card">
                <rankChampionsStatistic></rankChampionsStatistic>
            </div>
        </a-col>
        <a-col :span="18">
            <div class="my-card charts-card">
                <chartsDisplay></chartsDisplay>
            </div>

            <div class="my-card matches-list-card">
                <machesList></machesList>
            </div>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";
// when searchbar is focused, user can star a summoner which is stored in localstorage

import SoloRank from "../components/query/SoloRank.vue";
import FlexRank from "../components/query/FlexRank.vue";
import RankChampionsStatistic from "../components/query/RankChampionsStatistic.vue";
import ChartsDisplay from "../components/query/ChartsDisplay.vue";
import MachesList from "../components/query/matches/MachesList.vue";

@Options({
    props: {
        msg: String
    },
    components: { SoloRank, FlexRank, RankChampionsStatistic, ChartsDisplay, MachesList },
    data() {
        return {
            searchName: "joycjay"
        };
    },
    computed: {
        ...mapState("queryStore", ["summoner", "loading"])
    },
    methods: {
        ...mapActions("queryStore", ["loadSummoner", "loadMatches"]),
        onSearch() {
            this.loadSummoner({ summonerName: this.searchName }).then(res => {
                this.loadMatches({ pagination: 1 });
            });
        }
    }
})
export default class Query extends Vue {
    msg!: string;
}
</script>

<style lang="scss" scoped>
.my-card {
    border: 2px ridge rgba(170, 50, 220, 0.6);
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f1;
}

.search-container {
    align-items: flex-end;
    padding: 20px;
}

.solo-rank-card {
    height: 200px;
    margin-right: 10px;
}
.flex-rank-card {
    height: 150px;
    margin-right: 10px;
}
.rank-champions-card {
    height: 800px;
    margin-right: 10px;
}

.charts-card {
    height: 300px;
    margin-left: 10px;
}

.matches-list-card {
    height: 1000px;
    margin-left: 10px;

    display: flex;
    flex-direction: column;
}
</style>
