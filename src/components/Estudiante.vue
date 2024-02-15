<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text">
  <input v-model="nombre" type="text">
  <button @click="consultarPorId">Consultar</button>
   <button @click="insertar">Insertar</button>
    <input  v-model="apellido" type="text">

</template>

<script>
import {consultarEstudianteFachada,insertarFachada} from "../helpers/clienteEstudiante.js"

export default {

    data(){
        return{
            id:null,
            nombre:null,
            apellido:null
        }
    },
    methods:{
        async consultarPorId(){
           const data= await consultarEstudianteFachada(this.id);
           console.log("desde componente");
           console.log(data);
           this.nombre=data.nombre;
        },
       async insertar(){
    const estuBody ={
        nombre: "Juan",
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: "1996-04-01T00:00:00",
        correo: "edison@hotmail.com",
        telefono: "2051651",
        carrera: "Computacion",
        semestre: "Decimo",
        creditos: 19
    };

           await insertarFachada(estuBody);
        }

    }
}
</script>

<style>

</style>