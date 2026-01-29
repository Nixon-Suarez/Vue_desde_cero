<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <button @click="eliminarTarea">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const tareas = ref([]);
  const nuevaTarea = ref('');

  const addTarea = () => {
    if (nuevaTarea.value.trim() !== '') {
      tareas.value.push(nuevaTarea.value.trim());
      nuevaTarea.value = '';
    }
  };
  const eliminarTarea = (index) => {
    tareas.value.splice(index, 1);
  }
</script>

<style></style>
