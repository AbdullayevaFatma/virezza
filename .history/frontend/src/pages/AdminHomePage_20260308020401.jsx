
const AdminHomePage = () => {
  const orders = [
    {
      _id: "123123",
      user:{
        name:"John Doe"
      },
      totalPrice: 110,
      status:"Processing"
    }
  ]
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold"></h1>
    </div>
  )
}

export default AdminHomePage