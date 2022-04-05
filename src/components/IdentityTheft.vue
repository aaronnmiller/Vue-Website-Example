<template>
    <span>
        <h1>Names to steal</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
            {{user.firstName}}
            <v-btn @click="showDetails(user.id)">Details</v-btn>
            </li>
            <!-- <li>{{ users.title }}</li> -->
        </ul>
    </span>
</template>

<script>
export default {
    name: "IdentityTheft",
    data() {
        return {
            users:[]
        }
    },
    methods: {
        showDetails(id) {
            this.$store.dispatch("getDetails", id);
        },
        async getData() {
            try {
                // let url = "https://jsonplaceholder.typicode.com/users"
                // const response = await this.$http.post(url, {
                //     title: 'foo',
                //     body: 'bar',
                //     userId: 1
                // },{
                //     headers: {
                //         'Content-type': 'application/json'
                //     }
                // })

                let url = "https://dummyapi.io/data/v1/user"
                const response = await this.$http.get(url, {
                    headers: {
                        'app-id' : '62168790c810c9a5f5190062',
                    }
                });
                this.users = response.data.data;

                // this.users = response.data
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