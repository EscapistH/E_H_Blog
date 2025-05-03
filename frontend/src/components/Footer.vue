<script setup>

import { NLayout, NLayoutHeader } from 'naive-ui'

</script>

<template>
    <n-layout>
        <n-layout-header class="footer-container">
            <p>&copy; 2025 HeSir's Blog | All rights reserved.</p>
            <a href="https://github.com/EscapistH" target="_blank">
                GitHub/EscapistH
            </a>
        </n-layout-header>
    </n-layout>
</template>

<style scoped>
a {
    color: #c3d7df;
}

.footer-container {
    background-color: #2D76C4;
    color: #EDEDED;
    text-align: center;
    padding: 10px;
}
</style>