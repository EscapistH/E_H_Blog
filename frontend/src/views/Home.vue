<!-- views/Home.vue -->
<template>
    <div class="home">
        <h1>Welcome to HeSir's Blog</h1>
        <p>这是一个个人博客网站，记录技术学习与生活点滴。</p>
        <h2>最新文章</h2>
        <ul>
            <li v-for="article in recentArticles" :key="article.id">
                <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/articleStore';

const articleStore = useArticleStore();
const recentArticles = articleStore.articles.slice(articleStore.articles.length - 3, articleStore.articles.length).reverse(); // 显示前3篇
</script>

<style scoped>
</style>