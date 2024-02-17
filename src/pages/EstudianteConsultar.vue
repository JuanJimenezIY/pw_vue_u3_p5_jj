<template>
  <h1>Pagina consultar</h1>

       <p type="Id: ">
        <input v-model="id" type="text" placeholder="Ingrese ID"/>
      </p>
      <button @click="consultarPorId">Consultar</button>

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

</template>

<script>
import {
  consultarEstudianteFachada,
} from "../helpers/clienteEstudiante.js";
export default {
data() {
    return {
      id: null,
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

  methods:{
async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("desde componente");
      console.log(data);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.fechaNacimiento = data.fechaNacimiento;
      this.correo = data.correo;
      this.telefono = data.telefono;
      this.carrera = data.carrera;
      this.semestre = data.semestre;
      this.creditos = data.creditos;
    }
}
}
</script>

<style>


</style>