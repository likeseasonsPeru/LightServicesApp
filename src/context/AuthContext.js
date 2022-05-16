import React, { createContext, useReducer } from 'react'
import { Alert } from 'react-native';
import { onSignIn } from '../services/auth';
import AuthReducer from './AuthReducer'

export const AuthContext = createContext({});

export const authInitialState = {
    user: null,
    status: false,
    message: "not-authenticated",
    token: null,
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const login = async (dts) => {
        try {
            const {data} = await onSignIn(dts)
            console.log(data)
            dispatch({
                type: "SIGNIN",
                payload: {
                    user: data.user,
                    token: data.token
                }
            })
        } catch (error) {
          Alert.alert("Login Incorrecto");
          console.log("Error :", error);
        }
    }

    return (
        <AuthContext.Provider value={{ ...authState, login }}>
            {children}
        </AuthContext.Provider>
    )
}