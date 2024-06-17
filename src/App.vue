<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'




</script>

<template>
<div id="app">
    <Notification/>
    <!-- Other components and content -->
  </div>
  <RouterView />
</template>

<style scoped>

</style>

<script>
import Notification from './components/Notification.vue';

export default {
  components: {
    Notification,
  },
};
</script>