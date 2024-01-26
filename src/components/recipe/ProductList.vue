<template>
  <div class="recipe__list-recipe row">
    <product-card v-for="recipe in recipes" :data="recipe"> </product-card>
    <div class="col-12 col-lg-3 col-sm-4 position-relative py-2">
      <AllCard></AllCard>
    </div>
  </div>
  <div>
    <div>
      <h1 class="font2">Shop By Brand</h1>
    </div>
    <div>
      <div class="product-brand">
        <p class="product-list2">Vans</p>
        <p class="product-list2">Vans</p>
      </div>
    </div>
  </div>
  <div>
    <h1 class="font2">New Products</h1>
  </div>
  <div class="recipe__list-recipe row">
    <new-product v-for="recipe in recipes" :data="recipe"> </new-product>
    <div class="col-12 col-lg-3 col-sm-4 position-relative py-2">
      <AllCard></AllCard>
    </div>
  </div>
</template>

<script setup>
import AllCard from "./AllCard.vue";
import ProductCard from "./ProductCard.vue";
import NewProduct from "./NewProduct.vue";

defineProps({
  recipes: Array,
});
</script>
