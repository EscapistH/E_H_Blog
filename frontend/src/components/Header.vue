<script setup>
import { NLayout, NButton, NAvatar } from 'naive-ui'
import { RouterLink } from 'vue-router';

import { useConfigStore } from '@/stores/configStore';
const configStore = useConfigStore();
const config = configStore.sysConfig;

</script>

<template>
    <n-layout>
        <div class="container">
            <div class="icon-title">
                <p>{{ config.title }}</p>
            </div>
            <div class="items">
                <template v-for="item in config.headerItems">
                    <router-link :to="item.link">
                        <n-button text color="#c3d7df">{{ item.name }}</n-button>
                    </router-link>
                </template>
            </div>
            <div class="avatar-button">
                <n-button text><n-avatar></n-avatar></n-button>
            </div>
        </div>
    </n-layout>
</template>

<style scoped>
.container {
    display: flex;
    color: #EDEDED;
    background-color: #2D76C4;
    text-shadow: 0 0 10px rgba(0, 0, 0);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.3);
}

.header-items {
    flex-grow: 10;
}

.header-avatar-button {
    flex-grow: 1;
}
</style>