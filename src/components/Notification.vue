<template>
    <div v-if="messages.length" :class="['notification', type]">
      <ul>
        <button v-on:click="closeNotification()" v-for="(message, index) in messages" :key="index">{{ message }}</button>
      </ul>
    </div>
  </template>
  
  <script>
  import notificationsService from '../notificationService';
  
  export default {
    data() {
      return {
        messages: [],
        type: '',
      };
    },
    created() {
      this.subscription = notificationsService.notification$.subscribe((notification) => {
        if (notification) {
          this.messages = notification.messages;
          this.type = notification.type;
          setTimeout(() => this.closeNotification(), 3500);
        }
      });
    },
    beforeDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    },
    methods: {
      closeNotification() {
        this.messages = [];
        this.type = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    color: white;
  }
  .notification.success {
    background-color: green;
  }
  .notification.warning {
    background-color: orange;
  }
  .notification.error {
    background-color: red;
  }
  </style>
  