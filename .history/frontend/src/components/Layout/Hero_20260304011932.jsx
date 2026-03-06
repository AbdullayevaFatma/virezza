import hero from "../../assets/hero.avif"
const Hero = () => {
  return (
    <section>
      <img src={hero} alt="hero image" className="w-full h-100 md:h-150 lg:h-[750px] object-cover"/>
    </section>
  )
}

export default Hero