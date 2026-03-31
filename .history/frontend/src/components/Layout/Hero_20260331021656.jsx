import { Link } from "react-router-dom"
import hero from "../../assets/hero.avif"
const Hero = () => {
  return (
    <section className="relative">
      <img src={hero} alt="hero image" className="w-full h-100 md:h-150 lg:h-187.5 object-cover "/>
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">Discover
            <br /> Collection
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
           Unveil your perfect outfit picks, delivered quickly around the globe.
          </p>
          <Link to="collections/all?gender=Women" className="bg-white text-gray-950 px-6 py-2 text-lg">Shop now</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero