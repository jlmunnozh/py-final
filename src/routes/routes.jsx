import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import PrimaryLayout from "../layouts/PrimaryLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Nosotros from "../pages/Nosotros";
import Productos from "../pages/Productos";
import Servicios from "../pages/Servicios";
import Clientes from "../pages/Clientes";
import Contactos from "../pages/Contactos";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrimaryLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: 'productos',
                element: <Productos />
            },
            {
                path: 'servicios',
                element: <Servicios />
            },
            {
                path: 'clientes',
                element: <Clientes />
            },
            {
                path: 'contactos',
                element: <Contactos />
            }
        ]
    }
]);
