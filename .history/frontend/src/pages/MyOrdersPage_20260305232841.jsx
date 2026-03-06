import { useEffect, useState } from "react"

const MyOrdersPage = () => {
  const [orders,setOrders] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      const mockOrders = [
        {
          _id:"12345",
          createdAt: new Date(),
          
        }
      ]
    })
  })
  return (
    <div>MyOrdersPage</div>
  )
}

export default MyOrdersPage