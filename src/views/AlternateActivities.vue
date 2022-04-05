<template>
    <span>
        <h2 class="text-h2 cyan--text font-weight-bold text-center">Want to do something other than eat pocket loops? Here's is a suggestion:</h2>
        <br>
        <nonCerealActivities></nonCerealActivities>
    </span>
</template>

<script>
import nonCerealActivities from "../components/AlternateActivities.vue"

export default {
    name: "alternateActivities",
    components: {
        nonCerealActivities,
    },
};
</script>