// stores/articleStore.js
import { defineStore } from 'pinia';

export const useArticleStore = defineStore('article', {
    state: () => ({
        articles: [
            { id: 1, title: '文章1', tag: '测试tag1', summary: '测试摘要1', author: '测试作者1', content: '这是文章1的内容', date: '2025-01-01' },
            { id: 2, title: '文章2', tag: '测试tag2', summary: '测试摘要2', author: '测试作者2', content: '这是文章2的内容', date: '2025-01-01' },
            { id: 3, title: '文章3', tag: '测试tag3', summary: '测试摘要3', author: '测试作者3', content: '这是文章3的内容', date: '2025-01-01' },
            { id: 4, title: '文章4', tag: '测试tag4', summary: '测试摘要4', author: '测试作者4', content: '这是文章4的内容', date: '2025-01-01' },
            { id: 5, title: '文章5', tag: '测试tag5', summary: '测试摘要5', author: '测试作者5', content: '这是文章5的内容', date: '2025-01-01' },
            { id: 6, title: '文章6', tag: '测试tag6', summary: '测试摘要6', author: '测试作者6', content: '这是文章6的内容', date: '2025-01-01' },
        ],
    }),
    getters: {
        getArticleById: (state) => {
            return (id) => state.articles.find((a) => a.id === parseInt(id));
        },
    },
    actions: {
        addArticle(article) {
            this.articles.push(article);
        },
        deleteArticle(id) {
            this.articles = this.articles.filter((a) => a.id !== parseInt(id));
        },
    },
});