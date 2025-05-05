<script setup>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

import { NScrollbar } from 'naive-ui'
</script>

<template>
    <n-scrollbar style="max-height: 100vh;">
        <div class="app-container">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    </n-scrollbar>
</template>

<style scoped>
.app-container {
    font-size: 1.6rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: #fff;
}
</style>
