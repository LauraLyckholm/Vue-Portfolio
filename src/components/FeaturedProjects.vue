<template>
    <div>

    </div>
</template>

<script>
import axios from "axios";

const API = "https://api.github.com/users/LauraLyckholm/repos";

export default {
    name: "FeaturedProjects",
    data() {
        return {
            projects: [],
        }
    },
    created() {
        axios.get(API)
            .then(response => {
                this.projects = response.data;
            })
            .catch(error => {
                console.error(error);
            })
    }
}
</script>

<style scoped></style>