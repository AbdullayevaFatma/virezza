import { useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetailsPage = () => {
  const {id} = useParams()
  const [orderDetails,setOrderDetails] = useState()
  return (
    <div>OrderDetailsPage</div>
  )
}

export default OrderDetailsPage