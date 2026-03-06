import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2"

const Navbar = () => {
  return (
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
        <button className='relative hover:text-black'>
          <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
          <span className='absolute bg-orange-50 text-gray-700 text-xs rounded-full px-2 py-0.5 -top-1 -right-3'>4</span>
        </button>
        <button></button>
      </div>
    </nav>
  )
}

export default Navbar