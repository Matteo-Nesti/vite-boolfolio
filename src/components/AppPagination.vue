<template lang="">
    <div class="d-flex justify-content-center">
        <nav >
            <ul class="pagination">
                <li class="page-item" :class="[{ active: link.active }, { disabled: !link.url }]"
                v-for="link in links" :key="label">
                <button type="button" class="page-link" v-html="link.label" @click="$emit('change-page', link.url)"></button>
                </li>
            </ul>
        </nav>
</div>
</template>

<script>
export default {
    props: { links: Array },
    emits: ['change-page']
};
</script>

<style lang=""></style>
