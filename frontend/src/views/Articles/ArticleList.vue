<script setup>

import { useArticleStore } from '@/stores/articleStore';
import { NTag } from 'naive-ui';
const articleStore = useArticleStore();
const articles = articleStore.articles;

</script>

<!-- views/Articles/ArticleList.vue -->
<template>
    <div class="article-list">
        <div v-for="article in articles" :key="article.id" class="article-item">
            <router-link :to="`/article/${article.id}`">
                <h2 class="article-title">{{ article.title }}</h2>
                <n-tag type="info" size="small" class="article-tag">{{ article.tag }}</n-tag>
                <p class="article-summary">{{ article.summary }}</p>
                <div class="article-meta">
                    <span>📅 {{ article.date }}</span>
                    <span>✍️ {{ article.author }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>