import { useState } from "react"


const CartDrawer = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)
  const toggleCartDrawer =()=>{
    setDrawerOpen(!drawerOpen)
  }
  return (
    <div className={``}>CartDrawer</div>
  )
}

export default CartDrawer