<script setup>

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

</script>

<template>
    <div class="page-container">
        <Header></Header>
        <Content class="content-wrapper"></Content>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.page-container{
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    background-color: #fff;
}
</style>
