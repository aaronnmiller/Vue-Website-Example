<template>
    <span>
        <identity-theft></identity-theft>
        <identity-info></identity-info>
    </span>
</template>

<script>
import IdentityTheft from "../components/IdentityTheft.vue"
import IdentityInfo from "../components/IdentityInfo.vue"

export default {
    components: { IdentityTheft, IdentityInfo},
    name: "Consumption",
};
</script>
