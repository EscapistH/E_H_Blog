<script setup>

import { useArticleStore } from '@/stores/articleStore';
import { NList, NListItem } from 'naive-ui';
const articleStore = useArticleStore();
const articles = articleStore.articles;

</script>

<!-- views/Articles/ArticleList.vue -->
<template>
    <n-list hoverable class="article-list">
        <template v-for="article in articles" :key="article.id">
            <router-link :to="`/article/${article.id}`">
                <n-list-item class="article-item">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.summary }}</p>
                    <small>{{ article.date }}</small>
                </n-list-item>
            </router-link>
        </template>
    </n-list>
</template>

<style scoped></style>