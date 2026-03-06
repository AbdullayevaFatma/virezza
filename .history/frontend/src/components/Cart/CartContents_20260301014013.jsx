
const CartContents = () => {

  const cartProducts = [
    {
      productId:1,
      name: "T-shirt",
      size: "M",
      color:"Red",
      quantity: 1,
      price:15,
      image:"https://picsum.photos/200?random=1"
    },
    {
      productId:2,
      name: "Jeans",
      size: "L",
      color:"Blue",
      quantity: 1,
      price:25,
      image:"https://picsum.photos/200?random=2"
    },
  ]
  return (
    <div>CartContents</div>
  )
}

export default CartContents