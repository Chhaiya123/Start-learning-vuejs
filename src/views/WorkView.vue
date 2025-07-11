<template>
    <NavBar/>
        <section class="vh-100 leanding-banner" :style="{backgroundImage: `url(${bgCover})`}">
        <div class="w-100 vh-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center">
            <div class="p-4 w-50 text-center">
                <h1 class="display-3 text-secondary fw-bold">កិច្ចការខ្ញុំ</h1>
                <BtnGroupSlide>
                    <template v-slot:btn>
                        <BtnLight to="/exercise" title="លំហាត់ទី១"></BtnLight>
                        <BtnLight to="/exercise" title="លំហាត់ទី២"></BtnLight>
                        <BtnLight to="/exercise" title="លំហាត់ទី៣"></BtnLight>
                        <BtnLight to="/exercise" title="លំហាត់ទី៤"></BtnLight>
                    </template>
                </BtnGroupSlide>
            </div>
        </div>
    </section>
</template>
<script setup>
    import NavBar from '@/components/Home/Layouts/NavBar.vue';
    import bgCover from '@/assets/images/cover.jpg'
    import BtnLight from '@/components/Home/common/BtnLight.vue';
    import BtnGroupSlide from '@/components/Home/Layouts/BtnGroupSlide.vue';
</script>