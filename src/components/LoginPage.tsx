import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth } from '../app/firebase';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');

export default function LoginPage() {
    const authContext = useAuth()
    const navigate = useNavigate()
    const googleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result)
            authContext.setUser(result.user)
            navigate("/")

        } catch (error) {
            console.log('Firebase login error:', error);
        }
    }
    return (
        <button onClick={googleSignIn}>Google SignIn</button>
    )
}
