import { useState } from "react"


const CartDrawer = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)
  const toggleCartDrawer =()=>{
    setDrawerOpen(!drawerOpen)
  }
  return (
    <div className={`fixed top-0 right-0`}>CartDrawer</div>
  )
}

export default CartDrawer