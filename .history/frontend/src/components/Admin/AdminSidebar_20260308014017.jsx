import { Link } from "react-router-dom"

const AdminSidebar = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin"></Link>
      </div>
    </div>
  )
}

export default AdminSidebar