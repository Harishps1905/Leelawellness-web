<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="headline1 text-danger">Settings</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <dateandtime/>
            </div>
          </div>
  </div>
  <div class="d-flex flex-grow-1 align-items-center justify-content-center">
    <div class="py-5 text-black fw-bold">
      No Settings available
    </div>
  </div>
</template>

<script>
import dateandtime from '@/admin/DateAndTime.vue'

export default {
  name: 'settings',
  components: {
    dateandtime
  }
}
</script>

<style scoped></style>