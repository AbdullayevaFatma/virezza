import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'

const Navbar = () => {
   const [drawerOpen,setDrawerOpen] = useState(false)
   const [navDrawerOpen,setNavDrawerOpen] = useState(false)

const toggleNavDrawer =()=>{
    setNavDrawerOpen(!navDrawerOpen)
  }

  const toggleCartDrawer =()=>{
    setDrawerOpen(!drawerOpen)
  }
  return (
    <>
    <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
      <div>
        <Link to="/" className='text-2xl font-medium'>Virezza</Link>
      </div>
      <div className='hidden md:flex space-x-6'>
        <Link className='text-gray-700 hover:text-black text-sm font-medium uppercase' to="#">Men</Link>
        <Link className='text-gray-700 hover:text-black text-sm font-medium uppercase' to="#">Women</Link>
        <Link className='text-gray-700 hover:text-black text-sm font-medium uppercase' to="#">Top Wear</Link>
        <Link className='text-gray-700 hover:text-black text-sm font-medium uppercase' to="#">Bottom Wear</Link>

      </div>

      <div className='flex items-center space-x-4'>
        <Link to="/profile" className='hover:text-black'>
        <HiOutlineUser className='h-6 w-6 text-gray-700'/>
        </Link>
        <button onClick={toggleCartDrawer} className='relative hover:text-black'>
          <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
          <span className='absolute bg-orange-50 text-gray-700 text-xs rounded-full px-2 py-0.5 -top-1 -right-3'>4</span>
        </button>
        <div className='overflow-hidden'><SearchBar/></div>
        
        <button className='md:hidden'>
          <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
        </button>
      </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    <div className={`fixed top-0 left-0`}></div>
    </>

  )
}

export default Navbar