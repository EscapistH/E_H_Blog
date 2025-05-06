<script setup>

import { useArticleStore } from '@/stores/articleStore';
import { NTag } from 'naive-ui';
const articleStore = useArticleStore();
const articles = articleStore.articles;

</script>

<!-- views/Articles/ArticleList.vue -->
<template>
    <div class="articles-container">
        <div class="article-list">
            <template v-for="article in articles" :key="article.id">
                <router-link :to="`/article/${article.id}`">
                    <div class="article-item">
                        <h2 class="article-title">{{ article.title }}</h2>
                        <n-tag type="info" size="small" class="article-tag">{{ article.tag }}</n-tag>
                        <p class="article-summary">{{ article.summary }}</p>
                        <div class="article-meta">
                            <span>📅 {{ article.date }}</span>
                            <span>✍️ {{ article.author }}</span>
                        </div>
                    </div>
                </router-link>
            </template>
        </div>
        <div v-show="false" class="for-addon-feature"></div>
    </div>
</template>

<style scoped>
.articles-container {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    gap: 5%;
    /* 创建间距 */
    max-width: 100rem;
    /* 最大内容宽度 */
    margin: 0 auto;
    /* 自动边距实现居中 */
    padding: 4rem 2rem;
    /* 上下边距 + 左右内边距 */
}

.article-list {
    width: 65%;
    background: #fcfcfc;
    border-radius: 12px;
    box-shadow: 0 0 24px 12px rgba(0, 0, 0, 0.08);
    padding: 1rem 4rem;
}

/* 文章项细节优化 */
.article-item {
    padding-bottom: 2rem;
    transition: transform 0.2s ease;
}

.article-item:hover {
    transform: scale(1.05, 1.05);
}

.article-item::after {
    content: '';
    position: absolute;
    width: 0;
    height: 5px;
    background: #bdd1f0;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
}

.article-item:hover::after {
    width: 100%;
}

.article-title {
    margin-bottom: 1rem;
    line-height: 1.4;
}

.article-tag {
    margin-bottom: 1rem;
}

.article-summary {
    color: #4f667a;
    line-height: 1.7;
    margin: 1.6rem 0;
}

.article-meta {
    display: flex;
    gap: 2.4rem;
    color: #808080;
    font-size: 1.2rem;
}

.for-addon-feature {
    width: 35%;
    min-height: 400px;
    background: #e2effc;
    box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    position: sticky;
    top: 80px;
    /* 粘性定位距离顶部间距 */
    align-self: flex-start;
    /* 对齐顶部 */
}
</style>