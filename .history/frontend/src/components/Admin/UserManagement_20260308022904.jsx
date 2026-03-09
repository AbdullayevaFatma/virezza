import { useState } from "react"

const UserManagement = () => {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "admin"
    }
  ]

  const [formData,setFormData]= useState({
    name:"",
    email:"",
    password: "",
    role: "customer",
    
  })
  return (
    <div>UserManagement</div>
  )
}

export default UserManagement