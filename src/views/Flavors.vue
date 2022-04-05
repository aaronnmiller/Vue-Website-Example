<template>
    <span>
        <h1>List of all flavors</h1>
        <flavor-list></flavor-list>
    </span>
</template>

<script>
import FlavorList from "@/components/FlavorList.vue"

export default {
    name: "Flavors",
    components: {
        FlavorList,
    },
};
</script>