<template>
  <div class="container-md my-5 py-5">
    <div class="text-center" style="margin: 45px">
      <div class="font2">
        <h2 style="font-size: 75px; color: rgb(56, 211, 152)">
          Ready to declutter<br />your closet?
        </h2>
      </div>
      <router-link to="/shoppage">
        <p
          style="font-size: 18px; margin-top: 20px; padding: 9px 40px"
          class="btn btn-dark"
        >
          Shop Now
        </p>
      </router-link>
    </div>
    <div>
      <h1 class="font2">Popular Items</h1>
    </div>
    <div class="row">
      <ProductList :recipes="recipeList"
      v-if="recipeListStatus"></ProductList>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "../recipe/ProductCard.vue";
import ProductList from "../recipe/ProductList.vue";
import AllCard from "../recipe/AllCard.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const recipeListStatus = ref(false);
const recipeList = ref();

onMounted(async () => {
  try {
    await store.dispatch("recipe/getRecipeData");
    recipeListStatus.value = true;
    recipeList.value = store.state.recipe.recipes;
  } catch (error) {
    console.log(error);
  }
});
</script>
