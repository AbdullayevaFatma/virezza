import React from "react";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);

  if(!user || (role && user.role))
  return <div>{children}</div>;
};
