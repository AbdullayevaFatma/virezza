import { Link } from "react-router-dom";
import womenCollection from "../../assets/women_collection.webp";
import menCollection from "../../assets/men_collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-0">
      <div className="flex flex-col md:flex-row w-full">

        {/* Women Collection */}
        <div className="relative flex-1">
          <img
            src={womenCollection}
            alt="women collection"
            className="w-full h-175 object-cover brightness-85"
          />
          {/* Yazı resmin üzerinde */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Women`s Fashion
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-white inline-block pb-1 border-b-2 border-white"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men Collection */}
        <div className="relative flex-1">
          <img
            src={menCollection}
            alt="men collection"
            className="w-full h-175 object-cover brightness-85"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Men`s Fashion
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-white inline-block pb-1 border-b-2 border-white"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GenderCollectionSection;