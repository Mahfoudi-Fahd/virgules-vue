<template>
    <div v-if="visible" :class="['notification', type]" @click="hideNotification">
      <span>{{ message }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'success' // Can be 'success' or 'error'
      }
    },
    data() {
      return {
        visible: false
      };
    },
    methods: {
      showNotification() {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000); // Auto-hide after 3 seconds
      },
      hideNotification() {
        this.visible = false;
      }
    },
    watch: {
      message() {
        this.showNotification();
      }
    }
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  .notification.success {
    background-color: #4caf50;
  }
  .notification.error {
    background-color: #f44336;
  }
  </style>
  