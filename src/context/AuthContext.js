import React, { createContext, useReducer } from 'react'
import { Alert } from 'react-native';
import { onSignIn, onSignUp } from '../services/auth';
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
    
    const register = async (dts) => {
        try {
            const {data} = await onSignUp(dts)
            console.log(data);
        } catch (error) {
          Alert.alert("Register Incorrecto");
          console.log("Error :", error);
        }
    }

    return (
        <AuthContext.Provider value={{ ...authState, dispatch, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}