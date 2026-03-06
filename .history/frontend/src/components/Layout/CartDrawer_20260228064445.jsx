import { useState } from "react"


const CartDrawer = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)
  const toggleCartDrawer =()=>{
    setDrawerOpen
  }
  return (
    <div>CartDrawer</div>
  )
}

export default CartDrawer