<template lang="">
  <h1 class="my-3 text-center">Project Detail</h1>

  <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4" v-if="project.image">
        <img  :src="project.image" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{project.title}}</h5>
          <p class="card-text">
            {{project.content}}
          </p>
          <p class="card-text">
            <small class="text-body-secondary">{{ formatProjectDate(project.updated_at)}}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const baseUri = "http://127.0.0.1:8000/api/projects/";
import axios from "axios";
export default {
    data() {
        return {
            project: null,
        };
    },
    methods: {
        getProject() {
            const endPoint = baseUri + this.$route.params.id;
            axios
                .get(endPoint)
                .then((res) => {
                    this.project = res.data;
                })
                .catch((err) => {
                    console.errore(err);
                })
                .then(() => { });
        },

        formatProjectDate(dateString) {
            const date = new Date(dateString);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            return `${day}/${month}/${year} alle: ${hours}:${minutes}:${seconds}`;
        },
    },
    created() {
        this.getProject();
    },
};
</script>
<style lang=""></style>
