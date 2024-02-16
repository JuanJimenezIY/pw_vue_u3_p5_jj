<template>
  <h1>Pagina eliminar</h1>
   <p type="Id: ">
        <input v-model="id" type="text" placeholder="Ingrese ID"/>
      </p>
     <button @click="eliminar">Eliminar</button>
</template>

<script>
import {
  eliminarFachada
} from "../helpers/clienteEstudiante.js";


export default {
 data() {
    return {
      id: null,

    };
  },
  methods:{
    async eliminar(){
        await eliminarFachada(this.id);
    }
  }
}
</script>

<style>

</style>