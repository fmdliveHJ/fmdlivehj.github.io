<script setup>
const route = useRoute();
const { data: article } = await useAsyncData(() =>
  queryContent('blog', route.params.slug).findOne()
);
</script>

<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.date }}</p>
    <ContentRenderer :value="article" />
  </article>
</template>
