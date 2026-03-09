
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
    <div className="max-w-7xl">AdminHomePage</div>
  )
}

export default AdminHomePage