<template lang="">
  
<nav class="navbar bg-dark ">
  <div class="container justify-content-start">
      <RouterLink class="navbar-brand text-white me-3" to="/">
        MyPortfolio
      </RouterLink>
      <RouterLink class="nav-link text-white me-3" :to="{name:'home'}">
        home
      </RouterLink>
      <RouterLink class="nav-link text-white me-3" :to="{name:'contacts'}">
        contacts
      </RouterLink>
  </div>
</nav>

</template>

<script>
export default {

}
</script>

<style lang="">
    
</style>