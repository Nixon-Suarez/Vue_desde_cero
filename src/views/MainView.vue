<template>
  <Header :mensaje="texto"></Header>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="conent">
      <input type="text" v-model="texto">
      {{ texto }}
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue';
  import Header from '../components/Header.vue';
  import { ref } from 'vue';
  const texto = ref('')
</script>

<style>
  .container {
    display: flex;
  }
  .conent {
    flex: 1;
    padding: 60px;
    text-align: center;
  }
</style>
