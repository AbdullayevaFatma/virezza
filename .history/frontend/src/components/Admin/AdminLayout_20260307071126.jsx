import { useState } from "react"

const AdminLayout = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)

  const toggleSidebar =()=>{
    setIsSidebarOpen()
  }
  return (
    <div>AdminLayout</div>
  )
}

export default AdminLayout