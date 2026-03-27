<script setup>
import { reactive, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { normalizeProductImage } from '@/utils/productImage';

const productId = useRoute().params.id;
const toast = useToast();
const router = useRouter();

const form = reactive({
  title: '',
  price: '',
  category: '',
  image: '',
  description: '',
});

const state = reactive({
  rating: {
    rate: 0,
    count: 0,
  },
});

const handleSubmit = async () => {
  const updatedProduct = {
    title: form.title,
    price: Number(form.price),
    category: form.category,
    image: normalizeProductImage(form.image),
    description: form.description,
    rating: state.rating,
  };

  try {
    const response = await axios.put(`/api/products/${productId}`, updatedProduct);
    toast.success('Product updated successfully');
    router.push(`/products/${response.data.id || productId}`);
  } catch (error) {
    console.error('Error updating product:', error);
    toast.error('Product was not updated');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    form.title = response.data.title;
    form.price = response.data.price;
    form.category = response.data.category;
    form.image = response.data.image;
    form.description = response.data.description;
    state.rating = response.data.rating || { rate: 0, count: 0 };
  } catch (error) {
    console.error('Error fetching product:', error);
    toast.error('Error fetching product');
  }
});
</script>

<template>
  <section class="bg-indigo-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Product</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Product Title</label>
            <input
              type="text"
              id="title"
              name="title"
              v-model="form.title"
              class="border rounded w-full py-2 px-3 mb-2"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              v-model="form.category"
              class="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Price</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="price"
              name="price"
              v-model="form.price"
              class="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              v-model="form.image"
              class="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              v-model="form.description"
              required
            ></textarea>
          </div>

          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
