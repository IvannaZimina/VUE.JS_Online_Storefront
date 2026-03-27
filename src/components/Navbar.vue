<script setup>
    import logo from '@/assets/img/logo.png'
    import { RouterLink, useRoute } from 'vue-router';

const isActiveLinnk = (path) => {
  const route = useRoute();
  return route.path === path;
};
</script>

<template>
    <nav class="bg-indigo-700 border-b border-indigo-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                class="h-10 w-10 object-cover object-center rounded-full"
                v-bind:src="logo"
                alt="Online Storefront"
              />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >Online Storefront</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="['text-white', 'px-3', 'py-2', 'rounded-md', isActiveLinnk('/') ? 'bg-indigo-900' : 'hover:bg-gray-900 hover:text-white']"
                  >Home</RouterLink>
                <RouterLink
                  to="/products"
                  :class="['text-white', 'px-3', 'py-2', 'rounded-md', isActiveLinnk('/products') ? 'bg-indigo-900' : 'hover:bg-gray-900 hover:text-white']"
                  >Products</RouterLink>
                <RouterLink
                  to="/products/add"
                  :class="['text-white', 'px-3', 'py-2', 'rounded-md', isActiveLinnk('/products/add') ? 'bg-indigo-900' : 'hover:bg-gray-900 hover:text-white']"
                  >Add Product</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped>
</style>
