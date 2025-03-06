<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Backend from './blog/backend.vue';
import DsaCoding from './blog/dsa-coding.vue';
import Frontend from './blog/frontend.vue';
import Interactive from './blog/interactive.vue';
import Jsts from './blog/jsts.vue';
import ProjectExp from './blog/project-exp.vue';

const route = useRoute();

const getComponent = computed(() => {
  switch (route.path) {
    case '/blog/backend':
      return Backend;
    case '/blog/dsa-coding':
      return DsaCoding;
    case '/blog/frontend':
      return Frontend;
    case '/blog/interactive':
      return Interactive;
    case '/blog/jsts':
      return Jsts;
    case '/blog/project-exp':
      return ProjectExp;
    default:
      return null; // 기본 컴포넌트를 반환하거나 null 처리
  }
});
</script>

<template>
  <div>
    <component :is="getComponent" />
  </div>
</template>
