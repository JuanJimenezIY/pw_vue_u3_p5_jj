import axios from "axios"

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

export const consultarEstudianteFachada=async(id)=>{

    return await consultarEstudiante(id);
}

export const insertarFachada=async(body)=>{
     await insertar(body);
}