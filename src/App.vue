<template>
  <h1>Title1 : {{ text1 }}</h1>
  <h1>Title2 : {{ text2 }}</h1>
</template>

<script setup>
  import { ref } from 'vue';
  // non-reactive
  const text1 = 'Hello World!!'
  // reactive
  const text2 = ref('Hello World!!')
</script>
