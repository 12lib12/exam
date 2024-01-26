<template>
  <div
    class="header__navbar row justify-content-between align-items-center"
    style="width: 850px"
  >
    <search-menu></search-menu>
  </div>
  <div class="header__navbar d-flex" style="">
    <signup-menu></signup-menu>
    <LoginMenu></LoginMenu>
    <LanguageMenu></LanguageMenu>
  </div>
</template>

<script setup>
import SearchMenu from "./SearchMenu.vue";
import SignupMenu from "./SignupMenu.vue";
import LoginMenu from "./LoginMenu.vue";
import ProfileMenu from "./ProfileMenu.vue";
import LanguageMenu from "./LanguageMenu.vue";
</script>
