<template>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="conent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue';
</script>

<style>
  .container {
    display: flex;
  }
  .conent {
    flex: 1;
    padding: 20px;
    text-align: center;
  }
</style>
