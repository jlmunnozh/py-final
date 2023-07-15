import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {

    const [categori, setCategori] = useState([]);

    useEffect(() => {
        const readStrapi = async () => {
            const url = 'http://34.94.8.154:1337/api/py-portadas?populate=imagen'
            const options = {
                method: 'GET',
                headers: {
                    authorization: 'Bearer 0f0abc0fe479aaf6c590cbfe6d9ad89e05decf65e79c0a45cc8f62d2285194abab72b558ef821913e68c4acce48f7e0309124901bb3bdc2555ab84dd70697df457b884402e04ae33e730acbd4ad1e274012e62a43d6250151265d644b6a9a7a7811a933aee51f9e0c6e14e85bc59f9f7e47ec780adf5481509be148c164c9ff7'
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
                        return (
                            <div key={element.id}>
                                <h3 className="text-2xl font-bold text-center">{title}</h3>
                                {imagen.data.map(element => {
                                    const { url } = element.attributes
                                    return (
                                        <div key={element.id}>
                                            <Link to={href}>
                                                <img
                                                    src={'http://34.94.8.154:1337' + url}
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