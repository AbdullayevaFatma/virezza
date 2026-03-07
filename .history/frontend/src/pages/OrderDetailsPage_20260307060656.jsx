import { useParams } from 'react-router-dom'

const OrderDetailsPage = () => {
  const {id} = useParams()
  return (
    <div>OrderDetailsPage</div>
  )
}

export default OrderDetailsPage