import Designer from "../../assets/designer-icon.avif";
import Shopping from "../../assets/shopping-bag-icon.avif";
import Delivery from "../../assets/delivery-icon.webp"


const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <img src={Shopping} alt="shopping icon" className="w-10 h-10"/>
          </div>
          <h4 className="tracking-tighter mb-2">Luxury’s finest selection</h4>
          <p className="text-gray-600 text-sm tracking-tighter">Curated selection of 200+ global luxury brands</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <img src={Designer} alt="designer icon" className="w-12 h-12"/>
          </div>
          <h4 className="tracking-tighter mb-2 ">Top Designers</h4>
          <p className="text-gray-600 text-sm tracking-tighter">Limited-edition collections you won’t see elsewhere</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <img src={Delivery} alt="delivery icon" className="w-14 h-10"/>
          </div>
          <h4 className="tracking-tighter mb-2 ">Quick & Reliable Delivery</h4>
          <p className="text-gray-500 text-sm font-light tracking-tighter">Worldwide delivery to 130+ destinations</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection