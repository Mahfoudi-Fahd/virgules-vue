<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <RouterView />
  <div id="app">
    <Notification ref="notification" />
    <!-- Other components or content -->
  </div>
</template>

<style scoped>

</style>
<script>
import Notification from '@/components/Notification.vue';

export default {
  components: {
    Notification
    
  },
  methods: {
    showSuccess(message) {
      this.$refs.notification.message = message;
      this.$refs.notification.type = 'success';
      this.$refs.notification.showNotification();
    },
    showError(message) {
      this.$refs.notification.message = message;
      this.$refs.notification.type = 'error';
      this.$refs.notification.showNotification();
    }
  }
};
</script>
