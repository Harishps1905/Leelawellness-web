<template>
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="headline1 text-danger">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <dateandtime/>
            </div>
          </div>
        </div>
        <h2>Product Details</h2>
        <a class="my-2 btn btn-primary"  href="https://console.firebase.google.com/u/0/project/leelawellness-3567e/overview">USER ANALYTICS</a>
        <router-link class="text-success" style="text-decoration: none;" :to="{ name: 'Landing' }">
          Back to homepage <i class="bi bi-arrow-90deg-left"></i>
        </router-link>
        <div class="table-responsive">
          <table class="table table-striped table-sm mt-4" v-for="(prod, index) in this.$store.state.products">
            <thead class="my-4">
              <tr class="bg-primary">
                <th class="fw-bold"><b>ID</b></th>
                <th>Name</th>
                <th>Available product</th>
                <th>Product description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0{{index+1}}</td>
                <td style="width: max-content;">{{prod.productname}}</td>
                <td>{{prod.price}}</td>
                <td>{{ productsdesc(prod.ingredients) }}</td>
                <td><img :src="prod.imageUrl" class="" height="40px" width="30px" alt=""></td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
</template>

<script>
import dateandtime from '@/admin/DateAndTime.vue'
    export default {
        name:'Dashboard',
        components:{
          dateandtime
        },
        methods: {
          productsdesc(ingredients) {
    if (ingredients) {
      // Split ingredients into an array of words, and slice the first 10
      return ingredients.split(' ').slice(0, 10).join(' ') + '...';
    }
    return '';
  }
        }
    }
</script>

<style scoped>
th{
  background: rgba(247, 32, 32, 0.934);
    padding: 10px 5px;
  color: #fff;
}
td{
  padding: 15px 5px;
}
</style>