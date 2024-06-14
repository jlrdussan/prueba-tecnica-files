<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { auth } from './config/firebase'

onMounted(() => { auth })
defineOptions({
  name: 'App'
});
</script>
