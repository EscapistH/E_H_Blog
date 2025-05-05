<script setup>
import { RouterView } from 'vue-router';
import { Transition } from 'vue';
</script>

<template>
    <div class="content-container">
        <transition name="fade" mode="out-in" class="content-container">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped>
.content-container {
    background: #fff;
    padding: 1rem 1.5rem;
    min-height: 80vh;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>