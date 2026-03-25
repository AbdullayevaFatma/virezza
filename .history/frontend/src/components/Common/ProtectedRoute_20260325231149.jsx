import React from 'react'
import { useSelector } from 'react-redux'

export const ProtectedRoute = ({children,role}) => {

  const {} = useSelector((state)=>state.auth)
  return (
    <div>ProtectedRoute</div>
  )
}
