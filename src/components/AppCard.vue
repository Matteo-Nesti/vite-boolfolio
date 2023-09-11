<template lang="">
  <div class="container my-3">
    <div class="card mb-3" v-for="cardContent in cardContents">
      <div class="row g-0">
        <div class="col-md-4" v-if="cardContent.image">
          <img src="" class="img-fluid rounded-start" alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ cardContent.title }}</h5>
            <p class="card-text">
              {{ cardContent.content }}
            </p>
            <p class="card-text">
              <small class="text-muted">{{ cardContent.created_at }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: { cardContents: Array }
};

</script>
<style lang="">
</style>
