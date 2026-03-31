import { Link } from "react-router-dom"
import womenCollection from "../../assets/women_collection.webp"
import menCollection from "../../assets/men_collection.webp"

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Women Collection */}
        <div className="relative flex-1">
          <img
            src={womenCollection}
            alt="women collection"
            className="w-full h-[700px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30/10"></div>
          {/* Text */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 text-center p-4 z-10">
            <h2 className="text-2xl font-bold text-white mb-3">Women`s Fashion</h2>
            <Link to="/collections/all?gender=Women" className="text-white cursor-pointer">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men Collection */}
        <div className="relative flex-1">
          <img
            src={menCollection}
            alt="men collection"
            className="w-full h-[700px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Text */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 text-center p-4 z-10">
            <h2 className="text-2xl font-bold text-white mb-3">Men`s Fashion</h2>
            <Link to="/collections/all?gender=Men" className="text-white cursor-pointer">
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GenderCollectionSection