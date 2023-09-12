<template lang="">
<!-- header -->
  <AppHeader />


<main class="container">
  <!-- home page/ cards/ pagination -->
  <RouterView/> 

</main>

</template>


<script>


import AppHeader from "./components/AppHeader.vue";


export default {
  components: { AppHeader },

};
</script>

<style lang=""></style>
