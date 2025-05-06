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
        <div class="article-meta">
            <small>📅 发布于：{{ article.date }}</small>
            <small>✍️ 发布者：{{ article.author }}</small>
        </div>
        <div>{{ article.content }}</div>
    </div>
</template>

<style scoped>
.article-content {
    max-width: 900px;
    margin: 0 auto 2rem;
    line-height: 1.8;
    font-size: 1.6rem;
}

.article-content h2 {
    border-left: 4px solid #2D76C4;
    padding-left: 1rem;
    margin: 2rem 0 1rem;
    color: #2D76C4;
}

.article-content p {
    margin-bottom: 1.2rem;
    text-align: justify;
}

.article-content code {
    background: #f0f0f0;
    padding: 0.3em 0.5em;
    border-radius: 4px;
}

.article-content pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 1em;
    overflow-x: auto;
    border-radius: 8px;
}
</style>