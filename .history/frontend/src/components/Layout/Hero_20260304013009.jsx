import hero from "../../assets/hero.avif"
const Hero = () => {
  return (
    <section className="relative">
      <img src={hero} alt="hero image" className="w-full h-100 md:h-150 lg:h-187.5 object-cover "/>
      <div className="absolute inset-0 bg-black  flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">Vacation
            <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation ready outfits with fast worldwide shipping.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero