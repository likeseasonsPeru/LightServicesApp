import React, { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'

export const AuthContext = createContext({});

export const authInitialState = {
    user: null,
    status: false,
    message: "not-authenticated",
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState)

    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}