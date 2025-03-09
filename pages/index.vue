<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';

const { data: blog } = await useAsyncData(() =>
  queryCollection('content').all()
);
</script>

<template>
  <div>
    <h1>Welcome to the Blog</h1>
    <ul>
      <li v-for="item in blog" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
