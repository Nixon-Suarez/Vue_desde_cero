<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Nombre: </label>
        <Field v-model="nombre" type="text" placeholder="Ingrese su nombre" name="name" id="name"/>
        <ErrorMessage name="name"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">Email: </label>
        <Field v-model="email" type="email" placeholder="Ingrese su email" name="email" id="email"/>
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
  import { Form, Field, ErrorMessage} from 'vee-validate';
  import { schema } from '../schemas/validationSchema.js';
  import { useRegistrarStore } from '../stores/registrarStore.js';
  import { ref } from 'vue';

  const registrarStore = useRegistrarStore();

  const nombre = ref('');
  const email = ref('');

  const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Formulario enviado:', { nombre: nombre.value, email: email.value });
  };
</script>

<style scoped>
.form {
  margin-bottom: 15px;
}
</style>
