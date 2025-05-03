<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
    <div class="main-container">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.main-container {
    background-color: #ffffff;
    color: #333;
    padding: 20px;
    display: flex;
    flex-direction: column;
    min-height: 85vh;
}
</style>