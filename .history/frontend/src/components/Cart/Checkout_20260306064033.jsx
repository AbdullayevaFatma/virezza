import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      name: "Stylish Sneakers",
      price: 135,
      size: "M",
      color: "Black",
      image: "https://picsum.photos/200?random=1",
    },
    {
      name: "Casual Hoodie",
      price: 145,
      size: "S",
      color: "Gray",
      image: "https://picsum.photos/200?random=2",
    },
  ],
  totalPrice: 275,
};

const Checkout = () => {
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
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
    {/* Left Section */}
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl uppercase mb-6">Checkout</h2>
      <form >
        <h3 className="text-lg mb-4">Contact Details</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email"  value="user@example.com" className="w-full p-2 border rounded" disabled/>
        </div>
        <h3 className="text-lg mb-4">Delivery</h3>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input type="text"  className="w-full p-2 border rounded" required value={shippingAddress.firstName} onChange={(e)=>setShippingAddress({...shippingAddress,firstName:e.target.value})}/>
          </div>
            <div>
            <label className="block text-gray-700">Last Name</label>
            <input type="text"  className="w-full p-2 border rounded" required value={shippingAddress.lastName} onChange={(e)=>setShippingAddress({...shippingAddress,lastName: e.target.value})}/>
          </div>
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700">Address</label>
          <input type="text" className="w-full p-2 border" value={shippingAddress.address} onChange={(e)=>setShippingAddress({...shippingAddress,address:e.target.value})}/>
        </div>
      </form>
    </div>
  </div>;
};

export default Checkout;
