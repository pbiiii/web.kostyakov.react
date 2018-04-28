const initialState = {
    registerSuccess: false,
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {...state, registerSuccess: true}
        default:
            return state
    }
}