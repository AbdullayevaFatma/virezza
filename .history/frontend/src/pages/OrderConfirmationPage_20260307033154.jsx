

const checkout = {
  _id: "12323",
  createdAt: new Date(),
checkoutItems:[
  {
    productId: "1",
    name: "Jacket",
    color: "black",
    size: "M",
    price: 150,
    quantity: 1,
    image:"https://picsum.photos/200?random=1"
  },
  {
    productId: "2",
    name: "T-shirt",
    color: "black",
    size: "S",
    price: 180,
    quantity: 2,
    image:"https://picsum.photos/200?random=2"
  },
],
shippingAddress:{
  address: "123 Fashion Street",
  city: "New York",
  country: "USA"
}
}
const OrderConfirmationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8"></h1>
    </div>
  )
}

export default OrderConfirmationPage