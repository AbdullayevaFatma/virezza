const cart = [
  {
  
    name: "Stylish Sneakers",
    price: Math.floor(Math.random() * 100) + 50, // 50 - 149 arası fiyat
    size: ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)], // rastgele size
    color: ["Red", "Blue", "Green", "Black"][Math.floor(Math.random() * 4)], // rastgele renk
    image: "https://via.placeholder.com/150?text=Sneakers" // örnek resim linki
  },
  {
   
    name: "Casual Hoodie",
    price: Math.floor(Math.random() * 80) + 40, // 40 - 119 arası fiyat
    size: ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)],
    color: ["Gray", "Black", "White", "Navy"][Math.floor(Math.random() * 4)],
    image: "https://via.placeholder.com/150?text=Hoodie"
  }
];

const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}

export default Checkout