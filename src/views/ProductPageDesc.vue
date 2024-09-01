<template>
  
  <section>
    <div style="height: 20vh;"></div>
    <div class="container my-5">
    <div class="row" v-if="productDetails">
        <div class="col-md-6">
          <img :src="productDetails.imageUrl" class="card-img-top" alt="Product 3">            
        </div>
        <div class="col-md-6">
            <p><strong>ID:</strong>{{ productDetails.id }}</p>
            <h1 class="product-name">{{ productDetails.productname }}</h1>
            <p class="text-muted">Himalayan Mountains</p>
            <p><span class="original-price">{{ productDetails.price}}</span><span class="price">$99.99</span> </p>
            <p class="text-success">In stock, ready to ship</p>
            <div class="my-3">
                <p>Size</p>
                <div class="size-options">
                    <button type="button" class="btn btn-outline-secondary">Regular Liquid – 50mL</button>
                    <button type="button" class="btn btn-outline-secondary">Sun Dried – 50mL</button>
                </div>
            </div>
            <div class="my-3">
                <p>Quantity</p>
                <div class="input-group">
                    <button class="btn btn-outline-secondary" type="button">-</button>
                    <input type="text" class="form-control text-center" value="1">
                    <button class="btn btn-outline-secondary" type="button">+</button>
                </div>
            </div>
            <div class="my-4">
                <button class="btn btn-success" @click="sendToWhatsApp">Buy now <i class="bi bi-whatsapp"></i></button>
            </div>
            <p class="product-description"> {{ productDetails.ingredients }} </p>
        </div>
    </div>
    <div v-else>
      Loading...
    </div>
</div>
  </section>
   
  </template>
  
  <script>
  import { getProducts } from "@/firebase/db";
  
  export default {
    name: 'ProductPageDesc',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        productDetails: null,
        whatsappNumber: "+917092516282",
      }
    },
    methods:{
      sendToWhatsApp() {
      const message = `Product: ${this.productDetails.id}\nDescription: ${this.productDetails.productname}\n Price: ${this.productDetails.price}\n[View Image](${this.productDetails.imageUrl}`;
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
  