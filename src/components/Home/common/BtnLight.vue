<template>
    <RouterLink :to="to" class="btn btn-light rounded-pill px-3">{{ title }}</RouterLink>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    defineProps({
        to: {type: String, required: true},
        title: {type: String, required: true}
    })

</script>