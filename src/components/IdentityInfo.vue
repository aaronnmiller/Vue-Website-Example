<template>
    <span>
    <h1>{{details.firstName + " " + details.lastName}}</h1>
    <h3>{{details.dateOfBirth}}</h3>
    <h3>{{details.email}}</h3>
    </span>
</template>

<script>
export default {
    name: "IdentityInfo",
    computed: {
        details() {
            return this.$store.state.userDetails;
        }
    }
}
</script>
