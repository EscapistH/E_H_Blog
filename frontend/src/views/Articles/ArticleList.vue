<script setup>

const Articles = [
    { id: 1, title: '文章1', content: '这是文章1的内容' },
    { id: 2, title: '文章2', content: '这是文章2的内容' },
    { id: 3, title: '文章3', content: '这是文章3的内容' },
    { id: 4, title: '文章4', content: '这是文章4的内容' },
    { id: 5, title: '文章5', content: '这是文章5的内容' },
    { id: 6, title: '文章6', content: '这是文章6的内容' },
]
</script>

<template>
    Article List在这里啦<br/>
    <template v-for="Article in Articles" :key="Article.id">
        <router-link :to="`/article/${Article.id}`">
            Article{{ Article.id }}<br />
        </router-link>
    </template>
</template>

<style scoped></style>