import { useState } from "react"

const AdminLayout = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)

  const toggleSidebar =()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button>
          <FaBar
        </button>
      </div>
    </div>
  )
}

export default AdminLayout