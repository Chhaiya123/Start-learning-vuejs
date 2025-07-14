<template>
    <button class="btn btn-primary" :type="type">{{ text }}</button>
</template>
<script setup>
    defineProps({
        text: {type: String},
        type: {type: String},
    })
</script>