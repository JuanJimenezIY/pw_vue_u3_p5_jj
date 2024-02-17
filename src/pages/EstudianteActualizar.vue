<template>
  <h1>Pagina actualizar</h1>
 
      <p type="Id: ">
        <input v-model="id" type="text" placeholder="Ingrese ID"/>
      </p>
     

      <p type="Nombre:">
        <input v-model="nombre" type="text" placeholder="Nombre" />
      </p>
      <p type="Apellido:">
        <input v-model="apellido" type="text" placeholder="Apellido"/>
      </p>
      <p type="Genero:">
        <input v-model="genero" type="text" />
      </p>
      <p type="Fecha de nacimiento:">
        <input v-model="fechaNacimiento" type="text" />
      </p>
      <p type="Correo:">
        <input v-model="correo" type="text" />
      </p>
      <p type="Telefono:">
        <input v-model="telefono" type="text" />
      </p>
      <p type="Carrera:">
        <input v-model="carrera" type="text" />
      </p>
      <p type="Semestre:">
        <input v-model="semestre" type="text" />
      </p>
      <p type="Creditos:">
        <input v-model="creditos" type="text" />
      </p>

 
      <button @click="actualizar">Actualizar</button>
      
 
</template>

<script>

import {

  actualizarFachada,

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
},methods:{
async actualizar(){
        const body = {
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

        await actualizarFachada(this.id,body);
    },

}
}
</script>

<style>

</style>