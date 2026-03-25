import React from "react";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);

  if()
  return <div>{children}</div>;
};
