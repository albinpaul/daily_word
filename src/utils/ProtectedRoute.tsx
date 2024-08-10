import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../app/firebase'



export default function ProtectedRoute() {
    const authContent = useAuth()
    onAuthStateChanged(auth, (user) => {
        return <Navigate to="/login"/>
    })
    return (
        <Outlet/>
    )
}
