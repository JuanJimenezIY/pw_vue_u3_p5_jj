import {createRouter, createWebHashHistory} from 'vue-router'

//import EstudianteActualizar from '../pages/EstudianteActualizar'
//import EstudianteConsultar from '../pages/EstudianteConsultar'
//import EstudianteEliminar from '../pages/EstudianteEliminar'
//import EstudianteGuardar from '../pages/EstudianteGuardar'
//import NoFoundPage from '../pages/NoFoundPage'

const routes = [

    {
        path: '/actualizar',
        
        component: ()=> import('../pages/EstudianteActualizar')
    },
    {
        path: '/consultar/:id',
     
        component: ()=> import('../pages/EstudianteConsultar')
    },
    {
        path: '/eliminar',
   
        component: ()=> import('../pages/EstudianteEliminar')
    },
    {
        path: '/grabar',
       
        component: ()=> import('../pages/EstudianteGuardar')
    },
    {
        path: '/:pathMatch(.*)*',
  
        component: ()=> import('../pages/NoFoundPage')
    }


   
]

const router = createRouter({history: createWebHashHistory(),routes } ) 

export default router 