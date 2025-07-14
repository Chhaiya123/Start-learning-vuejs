<template>
    <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
            <h3 class="card-title">
                <slot name="title"></slot>
            </h3>
            <p class="card-text">
                <slot name="text"></slot>
            </p>
            <slot name="btn"></slot>
        </div>
    </div>
</template>
<script setup>

</script>