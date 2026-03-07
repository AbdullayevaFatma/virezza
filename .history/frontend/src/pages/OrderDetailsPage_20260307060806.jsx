import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetailsPage = () => {
  const {id} = useParams()
  const [orderDetails,setOrderDetails] = useState(null)
  useEffect(()=>{
    const mock
  })
  return (
    <div>OrderDetailsPage</div>
  )
}

export default OrderDetailsPage