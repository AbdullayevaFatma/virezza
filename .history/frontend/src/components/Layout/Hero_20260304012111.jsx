import hero from "../../assets/hero.avif"
const Hero = () => {
  return (
    <section>
      <img src={hero} alt="hero image" className="w-full h-100 md:h-150 lg:h-187.5 object-cover"/>
      <div className="absolute"></div>
    </section>
  )
}

export default Hero