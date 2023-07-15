
const Hero = () => {

    return (
        <section className="relative h-[50vh] flex items-center justify-center before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-sky-950/50">
            <img
                src="https://www.muycanal.com/wp-content/uploads/2020/04/Ca%C3%ADda-servidores-IONOS.jpg"
                alt="Servidores"
                width={1920}
                height={1080}
                className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
            />
            <div className="container px-2 mx-auto">
                <h1 className="relative text-5xl text-center font-black text-white">Tecnología a tu servicio ...</h1>
            </div>
        </section>
    );
}

export default Hero;