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
      setOrders(mockOrders)
    },1000)
  },[])
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3"></th>
              <th className="py-2 px-4 sm:py-3"></th>
              <th className="py-2 px-4 sm:py-3"></th>
              <th className="py-2 px-4 sm:py-3"></th>
              <th className="py-2 px-4 sm:py-3"></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default MyOrdersPage