<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="content-container">
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in" :duration="250">
                <component :is="Component" :key="route.path" class="transition-target" />
            </transition>
        </router-view>
    </div>
</template>

<style scoped>
.content-container {
    background: #fff;
    padding: 0rem 1.5rem;
    min-height: 80vh;
}

.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.25s ease-out,
        transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.transition-target {
    will-change: transform;
    /* 提升动画性能 */
}
</style>