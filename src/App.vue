<!-- 
  Main application root component.
  Assembles all major page sections: navigation bar, hero section, 
  featured cards, and job listings preview.
-->
<script setup>
// Import page layout components
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <!-- Navigation bar at the top of the page -->
  <Navbar />

  <!-- Hero section with main headline -->
  <Hero />

  <!-- Featured cards section -->
  <HomeCards />

  <!-- Job listings preview: show 3 items with action buttons -->
  <JobListings :limit="3" :showButtons="true" />
</template>
