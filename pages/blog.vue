<script setup>
const { data: articles } = await useAsyncData('blog-posts', () =>
  queryContent('blog').sort({ date: -1 }).find()
);
</script>

<template>
  <div>
    <h1>블로그</h1>
    <ul>
      <li v-for="article in articles" :key="article._path">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
