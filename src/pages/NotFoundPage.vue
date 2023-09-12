<template lang="">
    <div class="text-white bg-secondary d-flex justify-content-center align-items-center flex-column" >
        <h3>404|Page Not Found</h3>
        <button @click=$router.back() class="btn btn-dark mt-3">
            Back
        </button>
    </div>
</template>
<script>
export default {

}
</script>
<style  scoped lang="scss">
div {
    height: calc(100vh - 56px);
}
</style>