<template>

  <section>
    <div style="height: 20vh;"></div>
    <div class="container my-5">
      <div class="row m-0" v-if="productDetails">
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <img :src="productDetails.imageUrl" class="img-fluid" alt="Product 3">
        </div>
        <div class="col-12 col-md-6">
          <p><strong>ID: </strong>{{ productDetails.id }}</p>
          <h1 class="product-name sub_main_headline">{{ productDetails.productname }}</h1>
          <p class="text-muted">Himalayan Mountains</p>
          <p><span class="original-price"></span><span class="price">₹{{ productDetails.price }}</span> </p>
          <p class="text-success">In stock, ready to ship</p>
          <div class="my-3">
            <p>Quantity</p>
            <div class="input-group">
              <button class="btn btn-outline-secondary" type="button" @click="decreaseQuantity">-</button>
              <input type="text" class="form-control text-center" :value="NoOfProduct" readonly>
              <button class="btn btn-outline-secondary" type="button" @click="increaseQuantity">+</button>
            </div>
          </div>
          <div class="my-4 d-flex flex-column gap-3">
            <button class="btn w-100 rounded border-secondary btn-success mb-10" @click="sendToWhatsApp">Buy Now &nbsp;&nbsp;<i class="bi bi-whatsapp"></i></button>
            <a href="tel:00914872383834" class="btn w-100 rounded border-secondary btn-outline-success"><i class="bi bi-telephone"></i> Make A Call To Order</a>
          </div>
          <h2 class="mt-3 text-uppercase">Ingredients</h2>
          <p class="sub_header headline_color_2">Below are the ingredients used</p>
          <p class="product-description para_header headline_color_3"> {{ productDetails.ingredients }} </p>
        </div>
      </div>
      <div v-else>
        <skeleton/>
      </div>
    </div>
  </section>

</template>

<script>
import { getProducts } from "@/firebase/db";
import skeleton from '@/components/skeleton/Skeleton.vue';

export default {
  name: 'ProductPageDesc',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    skeleton,
  },
  data() {
    return {
      productDetails: null,
      whatsappNumber: "+918129497944",
      NoOfProduct: 1,
    }
  },
  computed: {
    increment() {
      return this.NoOfProduct + 1;
    }
  },
  methods: {
    increaseQuantity() {
      this.NoOfProduct++;
    },
    decreaseQuantity() {
      if (this.NoOfProduct > 1) {
        this.NoOfProduct--;
      }
    },
    sendToWhatsApp() {
      const message = `[View Image](${this.productDetails.imageUrl}\nProduct: ${this.productDetails.id}\nDescription: ${this.productDetails.productname}\n No.of product: ${this.NoOfProduct}\n`;
      const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    },
  },
  async mounted() {
    try {
      const products = await getProducts();
      this.productDetails = products.find(product => product.id === this.id);
      if (!this.productDetails) {
        console.error("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }
}
</script>

<style>
.price {
  font-size: 2rem;
  color: #d9534f;
}

.original-price {
  text-decoration: line-through;
  color: #6c757d;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.product-description {
  margin-top: 1rem;
}

.thumb-images img {
  width: 100px;
  height: auto;
  cursor: pointer;
  margin-right: 5px;
}

.size-options button {
  margin-right: 5px;
}
</style>