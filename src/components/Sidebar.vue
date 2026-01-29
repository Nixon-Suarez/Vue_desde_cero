<template>
  <div class="sidebar">
    <h2> Sidebar</h2>
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
    </ul>

  </div>
</template>

<script setup>
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
