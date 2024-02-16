import {createRouter, createWebHashHistory} from 'vue-router'

import EstudianteActualizar from '../pages/EstudianteActualizar'
import EstudianteConsultar from '../pages/EstudianteConsultar'
import EstudianteEliminar from '../pages/EstudianteEliminar'
import EstudianteGuardar from '../pages/EstudianteGuardar'

const routes = [

    {
        path: '/actualizar',
        compontent: EstudianteActualizar
    },
    {
        path: '/consultar',
        component: EstudianteConsultar
    },
    {
        path: '/elimi',
        component: EstudianteEliminar
    },
    {
        path: '/grabar',
        component: EstudianteGuardar
    }
   
]

const router = createRouter({history: createWebHashHistory(),routes } ) 

export default router 