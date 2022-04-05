<template>
    <span>
        <v-container>
            <v-card>
                <v-card-title style="word-break: break-word">{{ option.activity }}</v-card-title>
                <v-card-text style="word-break: break-word">Number of people required: {{ option.participants }}</v-card-text>
                <v-card-text style="word-break: break-word">Price Level?: {{ option.price }}</v-card-text>
            </v-card>
        </v-container>
    </span>
</template>

<script>
export default {
    name: "AlternateActivities",
    data() {
        return {
            option:[]
        }
    },
    methods: {
        showDetails(id) {
            this.$store.dispatch("getDetails", id);
        },
        async getData() {
            try {

                let url = "https://www.boredapi.com/api/activity"
                const response = await this.$http.get(url, {});
                this.option = response.data;

            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getData();
    }
};
</script>