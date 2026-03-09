import { Link } from "react-router-dom"

const AdminSidebar = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">Virezza</Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

      <nav className="flex flexxc"></nav>
    </div>
  )
}

export default AdminSidebar