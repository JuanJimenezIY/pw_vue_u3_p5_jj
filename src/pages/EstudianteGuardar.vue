<template>
  <h1>Pagina Guardar</h1>


      

      <p type="Nombre:">
        <input v-model="nombre" type="text" placeholder="Nombre" />
      </p>
      <p type="Apellido:">
        <input v-model="apellido" type="text" placeholder="Apellido"/>
      </p>
      <p type="Genero:">
        <input v-model="genero" type="text" placeholder="Genero"/>
      </p>
      <p type="Fecha de nacimiento:">
        <input v-model="fechaNacimiento" type="text" placeholder="Fecha de nacimiento"/>
      </p>
      <p type="Correo:">
        <input v-model="correo" type="text" placeholder="Correo"/>
      </p>
      <p type="Telefono:">
        <input v-model="telefono" type="text" placeholder="Telefono"/>
      </p>
      <p type="Carrera:">
        <input v-model="carrera" type="text" placeholder="Carrera"/>
      </p>
      <p type="Semestre:">
        <input v-model="semestre" type="text" placeholder="Semestre"/>
      </p>
      <p type="Creditos:">
        <input v-model="creditos" type="text" placeholder="Creditos"/>
      </p>

<button @click="insertar">Insertar</button>


</template>

<script>
import {
  
  insertarFachada,
 
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
    
      nombre: null,
      apellido: null,
      genero: null,
      fechaNacimiento: null,
      correo: null,
      telefono: null,
      carrera: null,
      semestre: null,
      creditos: null,
    };
  },
   methods: {
    
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        correo: this.correo,
        telefono: this.telefono,
        carrera: this.carrera,
        semestre: this.semestre,
        creditos: this.creditos,
      };

      await insertarFachada(estuBody);
    }
}}
</script>

<style>

</style>