<template>
  <div class="container">
    <h1>Componente Estudiante</h1>

    <div class="form">
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

      <button @click="insertar">Insertar</button>
      <button @click="actualizar">Actualizar</button>
      <button @click="eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarFachada,
  actualizarFachada,
  eliminarFachada
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
  methods: {
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
    },
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
    },
    async actualizar(){
        const body = {
        nombre: "Juan",
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: "1996-04-01T00:00:00",
        correo: "arroba",
        telefono: "0999",
        carrera: "Comp",
        semestre: "Decimo",
        creditos: "12",
      };

        await actualizarFachada(this.id,body);
    },
    async eliminar(){
        await eliminarFachada(this.id);
    }
  },
};
</script>

<style>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

button {
  color: #bfbfc2;
  background-color: #183e57;
  border-style: groove;
  border-radius: 10px;
  padding: 5px 15px;
}

p {
  display: grid;
  justify-content: center;
}
p:before {
  content: attr(type);
  display: block;
  text-align: left;
  margin: 3px 2px;
  font-size: 16px;
  color: #5a5a5a;
}

.form {
  height: 700px;
  width: 600px;
  background-color: #e6e6e6;
  border-radius: 8px;
  padding: 20px 30px;

  box-shadow: 0px 0px 40px -10px #000;
}
input {
  width: 300px;
  background: rgb(255, 255, 255);
  color: rgb(60, 60, 60);
}
input:focus {
  border-bottom: 3px solid #78788c;
}
</style>