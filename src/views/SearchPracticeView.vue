<template>
    <NavBar/>
    <section class="vh-100 leanding-banner" :style="{backgroundImage: `url(${bgCover})`}">
        <div class="w-100 vh-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center">
            <div class="p-4 w-50 text-center">
                <h1 class="display-3 text-secondary fw-bold">ការស្រាវជ្រាវ និង ការអនុវត្ត</h1>
                <BtnGroupSlide>
                    <template v-slot:btn>
                        <BtnLight to="/search" title="ការស្រាវជ្រាវ"></BtnLight>
                    </template>
                </BtnGroupSlide>
            </div>
        </div>
    </section>

    <section class="py-4">
        <div class="conatiner">
            <CapctionContent>
                <template v-slot:image>
                    <img width="300px" src="https://cdn.pixabay.com/photo/2025/06/15/21/04/golden-retriever-puppy-amber-9661916_1280.jpg" alt="">
                </template>
                <template v-slot:capction>
                    Hello My Kiki.
                </template>
            </CapctionContent>
        </div>
    </section>
</template>
<script setup>
    import NavBar from '@/components/Home/Layouts/NavBar.vue';
    import bgCover from '@/assets/images/cover.jpg'
    import CapctionContent from '@/components/SearchPractice/CapctionContent.vue';
    import BtnLight from '@/components/Home/common/BtnLight.vue';
    import BtnGroupSlide from '@/components/Home/Layouts/BtnGroupSlide.vue';
</script>