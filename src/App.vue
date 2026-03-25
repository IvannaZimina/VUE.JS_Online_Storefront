<!-- 
  Main application root component.
  Assembles all major page sections: navigation bar, hero section, 
  featured cards, and job listings preview.
-->
<script setup>
import Navbar from '@/components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar />
  <RouterView />

</template>
