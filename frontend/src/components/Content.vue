<script setup>

import { NLayout, NLayoutContent } from 'naive-ui'

import { RouterView } from 'vue-router';

</script>

<template>
    <n-layout>
        <n-layout-content class="main-container">
            <router-view />
        </n-layout-content>
    </n-layout>
</template>

<style scoped>
.main-container {
    background-color: #c3d7df;
    min-height: 80vh;
}
</style>