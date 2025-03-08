<template>
  <div>
    <h1>JSTS</h1>
    <ul>
      <li v-for="(doc, idx) in props.home" :key="idx">
        <p>제목: {{ doc.title }}</p>
        <p>내용: {{ doc.description }}</p>
        <p>카테고리: {{ doc.meta.category }}</p>
        <p>날짜: {{ doc.meta.date }}</p>
        <!-- ContentRenderer를 통해 본문을 렌더링할 수도 있음 -->
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

const props = defineProps<{
  home: Array<{
    path: string;
    title?: string;
    description?: string;
    meta: {
      category?: string;
      date?: string;
    };
  }>;
}>();

onMounted(() => {
  console.log('jsts.vue에서 받은 docs:', props.home);
});
</script>

<style scoped></style>
