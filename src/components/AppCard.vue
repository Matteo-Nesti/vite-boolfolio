<template lang="">
  <div class="my-3">
    <div class="card mb-3" v-for="cardContent in cardContents" :key="cardContent.id">
      <div class="row g-0">
        <div class="col-md-4" v-if="cardContent.image">
          <img :src="cardContent.image" class="img-fluid rounded-start" :alt="cardContent.slug" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-baseline">
              <h5 class="card-title">{{ cardContent.title }}</h5>
            <RouterLink 
            :to="{ name: 'project-detail', params: {id: cardContent.id}}" class="btn btn-success my-2"> 
                Details
            </RouterLink > 
            </div>
            <p class="card-text">
               {{ getAbstract(cardContent.content)}}
            </p>
            <p class="card-text">
              <small class="text-muted">{{ formatProjectDate(cardContent.created_at) }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { cardContents: Array },

  methods: {
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

    getAbstract(abstractString) {
      const abstract = abstractString.slice(0, 199);
      return abstract + '...'
    }
  }
};

</script>
<style lang="">
</style>
