import BaseButton from '../ui/BaseButton.vue';
<template>
  <div class="rounded" style="border: 5px solid black">
    <div>
      <img
        src="../../assets/images/8bc6b72a6c1962b8e71781a25f65281e.jpg"
        alt=""
        width="800px"
        class="rounded align-center center-img"
      />
    </div>
    <div>
      <div style="margin-left:10px">
        <div>
          <h2>RP200.000</h2>
          <p>Name</p>
        </div>
        <div>
          <p>Item Description</p>
          <p>Size XL but fits more like M looser fit has</p>
          <div class="d-flex">
            <p>Category :</p>
          </div>
          <div class="my-0">
            <p>Size :</p>
          </div>
          <div class="d-flex">
            <p>Condition :</p>
          </div>
          <div class="d-flex">
            <p>Color :</p>
          </div>
          <div class="d-flex">
            <p>Uploaded :</p>
          </div>
          <div class="d-flex">
            <p>Shipping :</p>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center">
          <BaseButton
            ><p style="font-size: 18px; padding: 9px 70px" class="btn btn-dark">
              Buy Now
            </p></BaseButton
          >
        </div>
        <div class="text-center">
          <BaseButton
            ><p style="font-size: 18px; padding: 9px 70px" class="btn btn-dark">
              Add to cart
            </p></BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
</script>
