import { HiShoppingBag } from "react-icons/hi2"

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl"/>
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">Free International Shipping</h4>
          
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection