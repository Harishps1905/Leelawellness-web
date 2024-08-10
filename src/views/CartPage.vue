<template>
    <div class="pt-5 mt-5" v-for="(cart, index) in cartItems" :key="index">
        {{ index + 1 }}
        {{ cart.productname }}
        {{ cart.ingredients }}
        {{ cart.price }}

        <div>
            <button class="p-3" @click="increment(index)">+</button>
            <span class="px-4">{{ cart.quantity }}</span>
            <button class="p-3" @click="decrement(index)">-</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cart",
    computed: {
        cartItems() {
            return this.$store.state.cartproduct;
        }
    },
    methods: {
        increment(index) {
            index++;
            this.$store.commit('incrementProduct', index);
        },
        decrement(index) {
            this.$store.commit('decrementProduct', index);
        }
    }
}
</script>

<style scoped></style>
