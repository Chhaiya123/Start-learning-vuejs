<template>
    <Leanding/>
    <section class="vh-100 leanding-banner" :style="{backgroundImage: `url(${bgCover})`}">
        <div class="w-100 vh-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center">
            <div class="p-4 w-50 text-center">
                <h1 class="display-3 text-secondary fw-bold">សូមស្វាគមន៍មកកាន់ Vue.js</h1>
                <p class="text-light opacity-50 mt-4">តោះចាប់ផ្ដើមរៀន Vue.js ពីចំនុចដំបូងជាមួយខ្ញុំ</p>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Leanding from '@/components/Leanding.vue';
    import { ref } from 'vue';

</script>