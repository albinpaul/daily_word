import { onAuthStateChanged } from 'firebase/auth'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../app/firebase'



export default function ProtectedRoute() {
    onAuthStateChanged(auth, (user) => {
        return <Navigate to="/login" />
    })
    return (
        <Outlet />
    )
}
