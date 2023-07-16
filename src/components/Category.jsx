import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {

    const [categori, setCategori] = useState([]);

    useEffect(() => {
        const readStrapi = async () => {
            const url = 'http://34.94.8.154/api/menu-inicios?populate=imagen'
            const options = {
                method: 'GET',
                headers: {
                    authorization: 'Bearer 02ca4855063e3bb3ca234ea64b9df42fd09f3fdab73569d3133cb90ba8b8bd61ddb7bcec8d0b88a95791a7b2c28a8bd01c82f653851a033926170d4af6e181ff29ec0c2786c115bfa691e50fc8a02e4e8fece61ef06bf03453e3350a0b4ab0b13240d746bfecd890c37ca3c5f6d137218ad48e79c0aaab467ba1cdbab1eabf54'
                }
            };
            const response = await fetch(url, options);
            const data = await response.json();
            setCategori(data.data);
        };
        readStrapi();
    }, []);

    return (
        <section className="py-8">
            <div className="container px-2 mx-auto flex flex-col gap-6">
                <h2 className="text-blue-900 font-extrabold text-4xl text-center transition-colors hover:text-black">Portafolio Tecnológico</h2>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] place-items-center place-content-center gap-6">
                    {categori.map(element => {
                        const { href, imagen, title } = element.attributes
                        console.log(imagen)
                        return (
                            <div key={element.id}>
                                <h3 className="text-2xl font-bold text-center">{title}</h3>
                                {imagen.data.map(element => {
                                    const { url } = element.attributes
                                    return (
                                        <div key={element.id}>
                                            <Link to={href}>
                                                <img
                                                    src={'http://34.94.8.154' + url}
                                                    alt={title}
                                                    className="w-full h-64 object-cover rounded-2xl overflow-hidden transition-shadow hover:shadow-xl hover:shadow-sky-800 border-sky-600 border-2"
                                                />
                                            </Link>
                                        </div>
                                    );
                                }
                                )}
                            </div>
                        );
                    })}</div>
            </div>
        </section>
    );
}

export default Category;