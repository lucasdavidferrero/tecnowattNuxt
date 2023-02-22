<script setup lang="ts">
import { ref } from 'vue'
const layout = ref('default') // default | panel
</script>
<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
