<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useArticleStore } from '@/stores/articleStore';

const route = useRoute();
const router = useRouter();
const articleStore = useArticleStore();
const article = articleStore.getArticleById(route.params.id);

if (!article) {
    router.push({ name: 'home' })
}

</script>

<template>
    <div v-if="article">
        <h1>{{ article.title }}</h1>
        <small>发布于：{{ article.date }}</small>
        <div>{{ article.content }}</div>
    </div>
</template>

<style scoped></style>