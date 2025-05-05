<script setup>

import { useArticleStore } from '@/stores/articleStore';
import { NList, NListItem } from 'naive-ui';
const articleStore = useArticleStore();
const articles = articleStore.articles;

</script>

<!-- views/Articles/ArticleList.vue -->
<template>
    <div class="article-list">
        <div v-for="article in articles" :key="article.id" class="article-card card">
            <router-link :to="`/article/${article.id}`">
                <h2 class="article-title">{{ article.title }}</h2>
                <p class="article-summary">{{ article.summary }}</p>
                <div class="article-meta">
                    <span>📅 {{ article.date }}</span>
                    <span>✍️ {{ article.author }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
</style>