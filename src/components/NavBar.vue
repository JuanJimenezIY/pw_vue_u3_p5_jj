<template>
  <div>

        <router-link to="/grabar">Guardar</router-link>
        <router-link to="/eliminar">Eliminar</router-link>
        <router-link to="/consultar">Buscar</router-link>
        <router-link to="/actualizar">Actualizar</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style>
div a{

    color: #2c3e50;
    margin: 0px 10px ;
    font-weight: bold;
    border: 2px black solid;
    padding: 10px 10px;
    border-radius: 5px;
    background: rgb(156, 203, 214);
}
.router-link-active  {
    background: rgb(75, 147, 167);

}
</style>