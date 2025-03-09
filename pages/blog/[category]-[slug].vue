<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useAsyncData } from 'nuxt/app';

const route = useRoute();

// ✅ `route.params['category-slug']`가 `undefined`일 경우 기본값 추가
const routeParams = computed(
  () => route.params['category-slug'] || 'undefined-slug'
);
const category = computed(() => route.params.category || 'undefined');
const slug = computed(() => route.params.slug || 'undefined');

const { data: blog } = await useAsyncData(() =>
  queryCollection('content').all()
);

const post = computed(() => {
  if (!blog.value) return null;
  return blog.value.find((item) => {
    return (
      item.path.replace(/\/$/, '') === `/blog/${category.value}/${slug.value}`
    );
  });
});
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <div class="markdown-body">
      <ContentRenderer :value="post.body" />
    </div>
  </div>
  <div v-else>
    <p>포스트를 찾을 수 없습니다.</p>
  </div>
</template>
