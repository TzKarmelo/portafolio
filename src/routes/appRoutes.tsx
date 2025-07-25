import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const SobreMi = lazy(() => import('../views/sobre-mi/sobre-mi'))
const Experiencia = lazy(() => import('../views/experiencia/experiencia'))
const Formacion = lazy(() => import('../views/formacion/formacion'))
const Proyectos = lazy(() => import('../views/proyectos/proyectos'))
const Contacto = lazy(() => import('../views/contacto/contacto'))

const appRoutes = [
	{
		path: '/',
		element: <Navigate to="/sobre-mi" replace />
	},
	{
		path: '/sobre-mi',
		element: <SobreMi title='Portafolio - SobreMi' />
	},
	{
		path: '/experiencia',
		element: <Experiencia title='Experiencia' />
	},
	{
		path: '/formacion',
		element: <Formacion title='Formación' />
	},
	{
		path: '/proyectos',
		element: <Proyectos title='Proyectos' />
	},
	{
		path: '/contacto',
		element: <Contacto title='Contacto' />
	},
	{
		path: '*',
		element: <Navigate to="/sobre-mi" replace />
	}
]

export default appRoutes
