// stores/articleStore.js
import { defineStore } from 'pinia';

export const useArticleStore = defineStore('article', {
    state: () => ({
        articles: [
            { id: 1, title: '文章1', content: '这是文章1的内容', date: '2025-01-01' },
            { id: 2, title: '文章2', content: '这是文章2的内容', date: '2025-01-01' },
            { id: 3, title: '文章3', content: '这是文章3的内容', date: '2025-01-01' },
            { id: 4, title: '文章4', content: '这是文章4的内容', date: '2025-01-01' },
            { id: 5, title: '文章5', content: '这是文章5的内容', date: '2025-01-01' },
            { id: 6, title: '文章6', content: '这是文章6的内容', date: '2025-01-01' },
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