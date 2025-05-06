<script setup>
import { NResult, NButton } from 'naive-ui';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="result-container">
        <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
            <template #footer>
                <router-link to="/">
                    <n-button type="info">看看其他的吧</n-button>
                </router-link>
            </template>
        </n-result>
    </div>
</template>

<style scoped>
.result-container {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    height: 100%;
    /* 确保容器高度撑满视口 */
    width: 100%;
}
</style>