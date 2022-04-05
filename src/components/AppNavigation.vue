<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index" :to="item.url">
                        <v-list-item-content>{{item.title}}</v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`div-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
    <v-app-bar color="blue darken-2" dense app>
        <v-app-bar-nav-icon @click = "drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <router-link to="/">
            <v-img max-width="40" src="@/assets/donut-logo.png"></v-img>
        </router-link>
        <router-link to="/">
            <v-app-bar-title>Cereal with a donut</v-app-bar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn class= "hidden-sm-and-down" to="/flavors" plain>Flavors</v-btn>
        <v-btn class= "hidden-sm-and-down" to="/details" plain>Details</v-btn>
        <v-btn class= "hidden-sm-and-down" to="/consumption" color="cyan darken-3">Consumption Instructions</v-btn>
        <v-btn class= "hidden-sm-and-down" to="/alternateLiquids" plain>Alternate Liquids</v-btn>
        <v-btn class= "hidden-sm-and-down" to="/nonCerealActivities" plain>Alternate Activities</v-btn>
    </v-app-bar>
    </span>
</template>

<script>
export default {
    name: "AppNavigation",
    data() {
        return {
            drawer: true,
            items: [
                {title: "Flavors", url:"/flavors"},
                {title: "Details", url:"/details"},
                {title: "Consumption Instructions", url:"/consumption"},
                {title: "Alternate Liquids", url:"/alternateLiquids"},
                {title: "Non-Cereal Activities", url:"/nonCerealActivities"},
            ]
        };
    },
};
</script>

<style scoped>
a,
a:visited{
    color: black;
    text-decoration: none;
}
</style>