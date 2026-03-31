import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCheckout } from "../../redux/slices/checkoutSlice";
import axios from "axios";

// const cart = {
//   products: [
//     {
//       name: "Stylish Sneakers",
//       price: 135,
//       size: "M",
//       color: "Black",
//       image: "https://picsum.photos/200?random=1",
//     },
//     {
//       name: "Casual Hoodie",
//       price: 145,
//       size: "S",
//       color: "Gray",
//       image: "https://picsum.photos/200?random=2",
//     },
//   ],
//   totalPrice: 275,
// };

const Checkout = () => {
  const [checkoutId, setCheckoutId] = useState(null);
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  //Ensure cart is loaded before proceeding

  useEffect(() => {
    if (!cart || !cart.products || cart.products.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleCreateCheckout = async(e) => {
    e.preventDefault();
    if (cart && cart.products.length > 0) {
      const response = await dispatch(
        createCheckout({
          checkoutItems: cart.products,
          shippingAddress,
          paymentMethod: "Paypal",
          totalPrice: cart.totalPrice,
        }),
      );
      if (response.payload && response.payload._id) {
        setCheckoutId(response.payload._id);
      }
    }
  };

  const handlePaymentSuccess = async(details)=>{

    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/{checkoutId}/pay`,{paymentStatus:"paid",paymentDetails:details},{headers:{
        Authorization:`Bearer ${localStorage.getItem("userToken")}`
      }})

     
        await handleFinalizeCheckout(checkoutId)
      
    } catch (error) {
      console.error(error);
      
    }
    
  }

  const handleFinalizeCheckout =async()=>{
try {
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,{},{headers:{
    Authorization: `Bearer ${localStorage.getItem("userToken")}`
  }})

  
navigate("/order-confirmation")
 
} catch (error) {
  console.error(error);
  
}
  }


  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  if(!cart || !cart.products || cart.products.length === 0){
    return <p>Your cart is empty</p>
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={user ? user.email : ""}
              className="w-full p-2 border "
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-2 border "
                required
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border "
                required
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              required
              className="w-full p-2 border "
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border "
                required
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border "
                required
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              required
              className="w-full p-2 border "
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              required
              className="w-full p-2 border "
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button type="submit" className="w-full bg-black text-white py-3">
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-[#fcfaf8] p-6">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t border-gray-200 py-4 mb-4 ">
          {cart.products.map((product, index) => (
            <div
              className="flex items-start justify-between py-2 border-b border-gray-200 "
              key={index}
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size : {product.size}</p>
                  <p className="text-gray-500">Color : {product.color}</p>
                  <p className="text-gray-500">Color : {product.color}</p>
                </div>
              </div>
              <p className="text-lg font-light">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t border-gray-200  pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
