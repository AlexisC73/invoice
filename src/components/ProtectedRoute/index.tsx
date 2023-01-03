import { useContext } from 'react'
import { UserCtx } from '../../context/UserCtx'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactElement
}) {
  const { user } = useContext(UserCtx)

  return Object.keys(user).length > 0 ? children : <Navigate to='/login' />
}
