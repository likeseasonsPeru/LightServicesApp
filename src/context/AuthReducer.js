const AuthReducer  = (state, action) => {
    switch (action.type) {
        case "SIGNIN":
            return {
                user: action.payload.user,
                status: true,
                message: "authenticated",
                token: action.payload.token
            }
        case "SIGNOUT":
            return {
                user: null,
                status: false,
                message: "not-authenticated",
                token: null
            }
        default:
            return {...state};
    }
}

export default AuthReducer;