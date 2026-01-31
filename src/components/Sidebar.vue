<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email:  {{ registrarStore.email }}</h3>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/lista-de-tareas">Lista de tareas</router-link>
      </li>
      <li>
        <router-link to="/registrar">Registrar</router-link>
      </li>
      <li>
        <router-link to="/calcular">Calcular</router-link>
      </li>
    </ul>

  </div>
</template>

<script setup>
  import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';

  const registrarStore = useRegistrarStore();
</script>

<style>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}
</style>
