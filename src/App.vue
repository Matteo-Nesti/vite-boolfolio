<template lang="">
<!-- header -->
<AppHeader />
<!-- cards -->
<AppCard :cardContents="projects.data"/>

<!-- paginazione -->

<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item" :class="[{active: link.active}, {disabled: !link.url}]" v-for="link in projects.links" :key="label">
      <button type="button" class="page-link" v-html="link.label" @click="fetchProjects(link.url)"></button>
    </li>
  </ul>
</nav>

</template>

<script>

import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";

export default {
  components: { AppHeader, AppCard },
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
};
</script>

<style lang=""></style>
