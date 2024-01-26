<template>
  <header
    class="shadow-sm container-fluid bg-white py-3 border-bottom fixed-top"
  >
    <div class="container-md d-flex justify-content-between align-items-center">
      <h1 class="fs-3 link-header" >
        <router-link to="/"> Vintage </router-link>
      </h1>
      <NavigationBar></NavigationBar>
    </div>
  </header>
</template>

<script setup>
import NavigationBar from "./NavigationBar.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>
