import React from 'react'
import { useSelector } from 'react-redux'

export const ProtectedRoute = ({children,role}) => {

  useSelector()
  return (
    <div>ProtectedRoute</div>
  )
}
