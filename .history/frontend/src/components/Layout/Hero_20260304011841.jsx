import hero from "../../assets/hero.avif"
const Hero = () => {
  return (
    <section>
      <img src={hero} alt="hero image" className="w-full h-[400px] md:h-[]"/>
    </section>
  )
}

export default Hero