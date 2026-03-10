
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
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-"></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default OrderManagement