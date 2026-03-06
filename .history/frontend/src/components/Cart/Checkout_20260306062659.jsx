const cart = [
  {
  
    name: "Stylish Sneakers",
    price: 135,
    size: "M",
    color:"Black"
    image: "https://picsum.photos/200?random=1"
  },
  {
   
    name: "Casual Hoodie",
    price: Math.floor(Math.random() * 80) + 40, // 40 - 119 arası fiyat
    size: ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)],
    color: ["Gray", "Black", "White", "Navy"][Math.floor(Math.random() * 4)],
    image: "https://picsum.photos/200?random=1"
  }
];

const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}

export default Checkout