<template>
    <v-container fluid class="home-details">
        <v-row>
            <v-col class="text-h3 font-weight-bold white--text text-center">
                Featured Cereal
            </v-col>
        </v-row>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="@/assets/capn_crunch.jpeg" height="400"></v-img>
                    <v-card-title>Captain Crunch</v-card-title>
                    <v-card-text>Theeeeyyyyy're great! All the crunch, none of the soggy. Don't mind the picture of the box.</v-card-text>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card>
                    <v-img src="@/assets/chips-ahoy.webp" height="400"></v-img>
                    <v-card-title>Chips Ahoy!</v-card-title>
                    <v-card-text>The food that says hi back.</v-card-text>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card>
                    <v-img src="@/assets/reeses_puffs.png" height="400"></v-img>
                    <v-card-title>Reese's Puffs</v-card-title>
                    <v-card-text>The best part of waking up is Reese's Puffs in your bowl.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>s

<script>
export default {
    name: "HomeDetails"
}
</script>

<style scoped>
.home-details {
    background-color: purple;
}
</style>