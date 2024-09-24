<template>
    <div class="d-flex gap-4">
        <button type="button" style="background: rgba(255, 0, 0, 0.682);" class="btn text-white dropdown-toggle">
            <span data-feather="calendar"></span>
            {{ formattedDate }}
        </button>
        <div class="d-flex flex-grow-1 align-items-center justify-content-center">
            <div>
            <span class="fw-bold">{{ formattedTime }} </span>
            <!-- <span class="fw-bold" v-if="formattedTime>12"></span>
            <span class="fw-bold" v-else="formattedTime<12"></span> -->
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'dateandtime',
    data() {
      return {
        currentTime: new Date(),
      };
    },
    computed: {
      formattedDate() {
        // Format the date (e.g., 'September 22, 2024')
        return this.currentTime.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      },
      formattedTime() {
        // Format the time with hours, minutes, and seconds (e.g., '14:32:45')
        return this.currentTime.toLocaleTimeString();
      }
    },
    mounted() {
      // Update time every second
      this.timer = setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    },
    beforeDestroy() {
      // Clear interval to prevent memory leaks
      clearInterval(this.timer);
    }
  };
  </script>
  
  <style scoped></style>
  