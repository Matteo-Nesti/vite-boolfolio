<template lang="">
<!-- header -->
<AppHeader />
<!-- cards -->
<AppCard :cardContents="projects"/>

</template>

<script>
const endpoint = "http://127.0.0.1:8000/api/projects";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";

export default {
  components: { AppHeader, AppCard },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
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
};
</script>

<style lang=""></style>
