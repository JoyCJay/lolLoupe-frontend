<template>
    <!-- <div class="about">
        <h1>This is an item page {{ Object.keys(categoriedItems) }}</h1>
    </div> -->

    <div style="padding: 20px;">
        <a-tabs size="large" type="card">
            <a-tab-pane key="all" tab="All items">
                <a-row :gutter="20">
                    <a-col :span="2" v-for="(item, id) in itemsMap" :key="id" class="item-card-container">
                        <a-tooltip :arrowPointAtCenter="true">
                            <a-card :bordered="false">
                                <template #cover>
                                    <img alt="example" :src="iconUrl(item.iconPath)" />
                                </template>
                                <a-card-meta class="meta">
                                    <template #title>
                                        <span>{{ item.name }}</span>
                                    </template>

                                    <template #description>
                                        {{ item.priceTotal }}
                                    </template>
                                </a-card-meta>
                            </a-card>
                            <template #title>
                                <h3>{{ item.name }}</h3>
                                <span v-html="item.description"></span>
                                <!-- <ul>
                                    <li v-html="item.description"></li>
                                    <li v-for="(field, key) in item" :key="key">{{ key }} : {{ field }}</li>
                                </ul> -->
                            </template>
                        </a-tooltip>
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane v-for="(category, idx) in Object.keys(categoriedItems)" :key="idx" :tab="category">
                <a-row :gutter="20">
                    <a-col :span="2" v-for="(itemID, key) in categoriedItems[category]" :key="key" class="item-card-container">
                        <a-tooltip :arrowPointAtCenter="true">
                            <a-card :bordered="false">
                                <template #cover>
                                    <img alt="example" :src="iconUrl(itemsMap[itemID].iconPath)" />
                                </template>
                                <a-card-meta class="meta">
                                    <template #title>
                                        <span>{{ itemsMap[itemID].name }}</span>
                                    </template>

                                    <template #description>
                                        {{ itemsMap[itemID].priceTotal }}
                                    </template>
                                </a-card-meta>
                            </a-card>
                            <template #title>
                                <h3>{{ itemsMap[itemID].name }}</h3>
                                <span v-html="itemsMap[itemID].description"></span>
                            </template>
                        </a-tooltip>
                    </a-col>
                </a-row>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { config } from "../../config";
export default {
    setup() {
        return {};
    },
    data() {
        return {
            categoriedItems: {}
        };
    },
    computed: {
        ...mapState("staticStore", ["itemsMap"]),
        iconUrl() {
            return fileName => {
                return `http://raw.communitydragon.org/${config.version}/game/assets/items/icons2d/${fileName}`;
            };
        }
    },
    methods: {
        parseItems: function() {
            const items = {
                other: []
            };

            for (const key in this.itemsMap) {
                if (Object.prototype.hasOwnProperty.call(this.itemsMap, key)) {
                    const item = this.itemsMap[key];

                    if (item.categories.length === 0) {
                        Array.prototype.push.call(items.other, item.id);
                    } else {
                        item.categories.forEach(cat => {
                            if (!Object.prototype.hasOwnProperty.call(items, cat)) {
                                items[cat] = [];
                            }
                            Array.prototype.push.call(items[cat], item.id);
                        });
                    }
                }
            }
            this.categoriedItems = items;
        }
    },
    created() {
        this.parseItems();
    }
};
</script>

<style lang="scss">
.item-card-container {
    padding: 10px;
}

.meta {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.ant-tooltip-inner {
    // width: 300px;
    h3 {
        color: white;
        text-decoration: underline;
    }
}
</style>
