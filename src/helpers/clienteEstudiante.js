import axios from "axios"

//Funciones
const consultarEstudiante= async (id)=> {

    //axios tiene onculido implicitamente un await
    //no hace falta declararlo
   const data= axios.get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data);
    console.log(data);
   return data;
}

const insertar = async (body)=>{
    const data= axios.post(`http://localhost:8081/API/v1.0/Matricula/estudiantes`,body).then(r => r.data);
    console.log(data)
}

const actualizar =async (id,body)=> {
    const data=axios.put(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`,body).then(r=>r.data);
    console.log(data);
}

const eliminar =async(id)=>{
    const data=axios.delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`).then(r=>r.data);
    console.log(data);
}

//Fachadas
export const consultarEstudianteFachada=async(id)=>{

    return await consultarEstudiante(id);
}

export const insertarFachada=async(body)=>{
     await insertar(body);
}

export const actualizarFachada=async(id,body)=>{
    await actualizar(id,body);
}

export const eliminarFachada=async(id)=>{
    await eliminar(id);
}