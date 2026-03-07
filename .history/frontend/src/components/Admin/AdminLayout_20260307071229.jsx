import { useState } from "react"

const AdminLayout = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)

  const toggleSidebar =()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="flex md:hidden"></div>
    </div>
  )
}

export default AdminLayout