import { useEffect, useState } from "react"

const MyOrdersPage = () => {
  const [orders,setOrders] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      const mockOrders = [
        {
          _id:"12345",
          createdAt: new Date(),
          shippingAddress: {city:"Izmir",country:"Turkey"},
          orderItems:[
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1"
            }
          ],
          totalPrice:100,
          isPaid: true
        },
        {
          _id:"34567",
          createdAt: new Date(),
          shippingAddress: {city:"Izmir",country:"Turkey"},
          orderItems:[
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=2"
            }
          ],
          totalPrice:100,
          isPaid: true
        },
      ]
      setOrders(mockorders)
    })
  })
  return (
    <div>MyOrdersPage</div>
  )
}

export default MyOrdersPage