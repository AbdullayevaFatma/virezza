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
          <h4 className="tracking-tighter mb-2 uppercase">Free International Shipping</h4>
          <p className="text-gray-600 text-sm tracking-tighter">On all orders over $100.00</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <img src={Designer} alt="designer icon" className="w-10 h-10"/>
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">45 DAYS RETURN</h4>
          <p className="text-gray-600 text-sm tracking-tighter">Money back guarantee</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <img src={Delivery} alt="delivery icon" className="w-10 h-10"/>
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">Secure Checkout</h4>
          <p className="text-gray-600 text-sm tracking-tighter">100% secured checkout process</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection