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
          {/* Text with overlay */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs text-center p-4">
            <div className="bg-black bg-opacity-30 px-4 py-2 inline-block rounded">
              <h2 className="text-2xl font-bold text-white mb-2">Women`s Fashion</h2>
              <Link to="/collections/all?gender=Women" className="text-white underline">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Men Collection */}
        <div className="relative flex-1">
          <img
            src={menCollection}
            alt="men collection"
            className="w-full h-[700px] object-cover"
          />
          {/* Text with overlay */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs text-center p-4">
            <div className="bg-black bg-opacity-30 px-4 py-2 inline-block rounded">
              <h2 className="text-2xl font-bold text-white mb-2">Men`s Fashion</h2>
              <Link to="/collections/all?gender=Men" className="text-white underline">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GenderCollectionSection