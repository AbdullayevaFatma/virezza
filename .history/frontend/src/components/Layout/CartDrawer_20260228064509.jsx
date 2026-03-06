import { useState } from "react"


const CartDrawer = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)
  const toggleCartDrawer =()=>{
    setDrawerOpen(!drawerOpen)
  }
  return (
    <div className={`fixed`}>CartDrawer</div>
  )
}

export default CartDrawer