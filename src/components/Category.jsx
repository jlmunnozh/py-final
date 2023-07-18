import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {

    const [categori, setCategori] = useState([]);

    useEffect(() => {
        const readStrapi = async () => {
            const url = 'https://jlasolutionstech.site/api/menu-inicios?populate=imagen'
            const options = {
                method: 'GET',
                headers: {
                    authorization: 'Bearer 4f66731d370706735c2ba2fd37dbd50c449b612b404547c3d0e6d1e74182f2254d10202cbadd66486b9fd5e93a2323cca8b3d82c0b03861faab8cb38343ceacd629a13724a3f6f8debc92b7e7ca966f5db506d30c9ae021045990dc755890e31a9d9dd1203b02419c5578558fb2df0a523b2ef70e6a7ecf43f4d3cd57e4a5da5'
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
                                                    src={'https://jlasolutionstech.site' + url}
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