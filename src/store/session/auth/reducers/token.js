const initialState = localStorage.getItem('token') || null

export const token = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload)
            return action.payload
        case 'LOGOUT':
            localStorage.removeItem('token')
            return null
        default:
            return state
    }
}