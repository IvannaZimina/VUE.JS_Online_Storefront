<script setup>
import ProductListing from './ProductListing.vue'
import { RouterLink } from 'vue-router';
import { reactive, defineProps, onMounted } from 'vue'
import { PulseLoader } from 'vue-spinner'
import axios from 'axios'

defineProps({
  limit: Number,
  showButtons:{
    type: Boolean,
    default: false
  }
})

const state = reactive({
  products: [],
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/products')
    state.products = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">Browse Products</h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader :loading="state.isLoading" color="#4A90E2" size="15px" />
      </div>
      <!-- Show product listing when done loading -->
      <div v-else class="grid grid--cols-1 md:grid-cols-3 gap-6">
        <ProductListing
          v-for="product in state.products.slice(0, limit) || state.products.length"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6" v-if="showButtons">
    <RouterLink
      to="/products"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Products
    </RouterLink>
  </section>
</template>
