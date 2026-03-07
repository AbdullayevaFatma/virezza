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
      payment
    }
  })
  return (
    <div>OrderDetailsPage</div>
  )
}

export default OrderDetailsPage