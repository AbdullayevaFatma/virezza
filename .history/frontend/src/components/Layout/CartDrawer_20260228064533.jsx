import { useState } from "react"


const CartDrawer = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)
  const toggleCartDrawer =()=>{
    setDrawerOpen(!drawerOpen)
  }
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w`}>CartDrawer</div>
  )
}

export default CartDrawer