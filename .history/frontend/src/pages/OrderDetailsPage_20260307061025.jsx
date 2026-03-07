import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetailsPage = () => {
  const {id} = useParams()
  const [orderDetails,setOrderDetails] = useState(null)
  useEffect(()=>{
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod:"PayPal",
      shippingMethod:"Standart",
      shippingAddress: {city:"New York",country:"USA"},
      orderItems:[
        {
          productId: "1",
          name:"jacket",
          price: 120,
          quantity: 1,
          
        }
      ]
    }
  })
  return (
    <div>OrderDetailsPage</div>
  )
}

export default OrderDetailsPage