const initialState = {
    loginSuccess: false,
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, loginSuccess: true}
        default:
            return state
    }
}