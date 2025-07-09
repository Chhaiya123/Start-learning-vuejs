<template>
    <nav class="navbar navbar-expand-lg navbar-dark py-4 fixed-top">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">
                <h3 class="fw-bolder mb-0">MY WORK</h3>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav m-auto gap-2">
                    <RouterLink class="nav-link active" to="/"><i class="bi bi-x-diamond me-1"></i> ទំព័រដើម</RouterLink>
                    <RouterLink class="nav-link" to="/works"><i class="bi bi-briefcase me-1"></i> កិច្ចការ</RouterLink>
                    <RouterLink class="nav-link" to="/search_practice"><i class="bi bi-columns-gap me-1"></i> ការស្រាវជ្រាវ និង ការអនុវត្ត</RouterLink>
                </div>
            </div>
            <button class="btn btn-link text-light">
                <i class="bi bi-search"></i>
            </button>
        </div>
    </nav>

</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>
