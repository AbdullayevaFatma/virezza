
const OrderManagement = () => {

  const orders = [
    {
      _id: 1232322,
      user:{
        name:"John Doe"
      },
      totalPrice: 110,
      status:"Processing"
    }
  ]
  return (
    <div className="max-w-7xl">OrderManagement</div>
  )
}

export default OrderManagement