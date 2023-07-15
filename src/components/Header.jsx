import { Link, NavLink } from "react-router-dom";
import logoEmpresa from '../assets/logo_emp.webp';

const Header = () => {

    const links = [
        {
            href: '/nosotros',
            content: 'Nosotros'
        },
        {
            href: '/productos',
            content: 'Productos'
        },
        {
            href: '/servicios',
            content: 'Servicios'
        },
        {
            href: '/clientes',
            content: 'Clientes'
        },
        {
            href: '/contactos',
            content: 'Contactos'
        }
    ];

    return (
        <header className="fixed z-50 top-0 left-0 w-full bg-black/50 shadow-sm shadow-gray-50">
            <nav className="py-2">
                <div className="container px-2 mx-auto flex items-center justify-between">
                    <Link to="/">
                        <img
                            src={logoEmpresa}
                            alt="Logo JLA Soluciones Informáticas"
                            width={128}
                            height={128}
                            className="object-cover rounded-2xl" />
                    </Link>
                    <ul className="flex gap-5">
                        {links.map((element, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={element.href} className={({ isActive }) => `text-white font-semibold transition-colors hover:bg-yellow-900 hover:text-white hover:shadow-lg hover:p-2 hover:rounded-lg hover:delay-75 ${isActive ? 'bg-yellow-900 text-white shadow-lg p-2 rounded-lg' : ''}`}>{element.content}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;