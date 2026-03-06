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
  return <div className="grid grid-cols-1 lg:grid-cols-2">Checkout</div>;
};

export default Checkout;
