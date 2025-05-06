<script setup>
import { NAvatar, NDropdown, useMessage } from 'naive-ui'
import { RouterLink } from 'vue-router';

import { useConfigStore } from '@/stores/configStore';
const configStore = useConfigStore();
const config = configStore.sysConfig;

const options = [
    {
        label: "用户资料",
        key: "profile",
    },
    {
        label: "编辑用户资料",
        key: "editProfile",
    },
    {
        label: "退出登录",
        key: "logout",
    }
]
const message = useMessage();
const handleSelect = (key) => {
    message.info(String(key));
}
</script>

<template>
    <div class="header-container">
        <div class="header-icon-title">
            <router-link to="/">
                <h1>{{ config.title }}</h1>
            </router-link>
        </div>
        <div class="header-nav">
            <template v-for="item in config.headerItems">
                <router-link :to="item.link" class="nav-link">{{ item.name }}</router-link>
            </template>
        </div>
        <n-dropdown trigger="click" placement="bottom" :options="options" @select="handleSelect">
            <n-avatar round :size="40" color="#ededed" text-color="#fff" class="header-avatar-button">
                {{ config.userInitials }}
            </n-avatar>
        </n-dropdown>
    </div>
</template>

<style scoped>
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    background: #2D76C4;
    color: #fff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    z-index: 2;
}

.header-icon-title {
    margin-left: 1rem;
}

.header-icon-title h1 {
    color: #EDEDED;
    font-size: 2.8rem;
    margin: 0;
    letter-spacing: 1px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.header-nav {
    max-width: 70%;
    display: flex;
    flex-grow: 2;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10rem;
}

.nav-link {
    color: #EDEDED;
    margin: 0 1.2rem;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: #fff;
    bottom: -4px;
    left: 0;
    transition: all 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.header-avatar-button {
    margin-right: 1rem;
    cursor: pointer;
}
</style>