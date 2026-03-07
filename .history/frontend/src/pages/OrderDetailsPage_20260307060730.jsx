import { useParams } from 'react-router-dom'

const OrderDetailsPage = () => {
  const {id} = useParams()
  const [orderDetails,setOrderDetails] = useS
  return (
    <div>OrderDetailsPage</div>
  )
}

export default OrderDetailsPage