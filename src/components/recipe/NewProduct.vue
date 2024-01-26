<template>
    <div
      class="col-12 col-lg-3 col-sm-4 position-relative py-2"
    >
      <div class="card text-decoration-none" style="height: 398px">
        <img
          :src= data.imageLink
          class="card-img-top"
          alt="Food"
          height="240"
          width="285"
          style="object-fit: cover"
        />
        <div class="card-body" style="color: #0a0a0a">
          <h3 class="mb-0">{{ data.price }}</h3>
          <div class="h-50">
            <h4 class="fs-5 mb-0">{{data.category}}</h4>
          </div>
          <p>8/m</p>
        </div>
      </div>
      <div
        class="position-absolute text-secondary bg-light px-2 py-1 rounded-circle top-0 end-0 m-4 like-icon"
      >
        <i class="fas fa-heart"></i>
      </div>
    </div>
</template>

<script setup>
import AllCard from "./AllCard.vue";

defineProps({
      data:Object
  })

</script>