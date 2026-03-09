
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
    <div className="maxw7">AdminHomePage</div>
  )
}

export default AdminHomePage