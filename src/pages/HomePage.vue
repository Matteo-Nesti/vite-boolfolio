<template lang="">
    <!-- cards -->
    <div class="container">
        <AppCard :cardContents="projects.data"/>
    </div>

    <!-- paginazione -->
  <AppPagination :links="projects.links" @change-page="fetchProjects"/>
</template>

<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
import AppPagination from "../components/AppPagination.vue";
export default {
    components: { AppCard, AppPagination },
    data() {
        return {
            projects: {
                data: [],
                links: [],
            },
        };
    },
    methods: {
        fetchProjects(endpoint = "http://127.0.0.1:8000/api/projects") {
            axios.get(endpoint).then((res) => {
                this.projects = res.data;
            })
                .catch(err => { alert(err) })
                .then(() => {

                }
                );
        },
    },
    created() {
        this.fetchProjects();
    },
}
</script>

<style lang="">
    
</style>