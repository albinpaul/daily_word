import { User } from "firebase/auth";
import React, { useContext, useState } from "react";

interface UserContext {
    user: User | null,
    setUser: (user: User | null) => void
}

export const AuthContext = React.createContext<UserContext>({
    user: null,
    setUser: () => { }
})


export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthContextProvider(props: {children: React.ReactNode}) {
    const [authUser, setAuthUser] = useState<User| null>(null)
    const contextInitValue = {
        user: authUser,
        setUser: setAuthUser
    }
    return (
        <AuthContext.Provider value={contextInitValue}>
            {props.children}
        </AuthContext.Provider>

    )
}
