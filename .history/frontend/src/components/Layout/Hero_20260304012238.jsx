import hero from "../../assets/hero.avif"
const Hero = () => {
  return (
    <section>
      <img src={hero} alt="hero image" className="w-full h-100 md:h-150 lg:h-187.5 object-cover"/>
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div className="text-center text-white p"></div>
      </div>
    </section>
  )
}

export default Hero