<template>
    <span>
        <v-container fluid>
            <v-row>
                <v-col class="text-h3 font-weight-bold text-center">
                    Alternate Liquids to put your cereal in
                </v-col>
            </v-row>
            <liquidsList></liquidsList>
        </v-container>
    </span>
</template>

<script>
import liquidsList from "../components/AlternateLiquids.vue"

export default {
    name: "AlternateLiquids",
    components: {
        liquidsList,
    },
};
</script>