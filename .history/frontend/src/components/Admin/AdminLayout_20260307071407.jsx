import { useState } from "react"
import { FaBars } from "react-icons/fa"

const AdminLayout = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)

  const toggleSidebar =()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24}/>
          <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
        </button>
      </div>
    </div>
  )
}

export default AdminLayout