import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  return <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">User Management</h2>
  </div>;
};

export default UserManagement;
