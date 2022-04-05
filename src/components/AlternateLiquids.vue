<template>
    <span>
        <v-row>
            <v-col v-for="liquid in liquids" :key="liquid.id" md="4">
                <v-card>
                    <v-card-title style="word-break: break-word">{{ liquid.liquid }}</v-card-title>
                    <v-card-text style="word-break: break-word">How does it taste?: {{ liquid.taste }}</v-card-text>
                    <v-card-text style="word-break: break-word">Is the liquid good to drink after the cereal is gone?: {{ liquid.drinkAfterAbility }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </span>
</template>

<script>
import liquids from "@/data/AlternateLiquids.json"
export default {
    name: "AlternateLiquids",
    data() {
        return {
            liquids: liquids,
        }
    }
};
</script>