const initialState = {
    token: null,
};

const LoginReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            token: action.payload,
        };
    } else if (action.type === 'LOGIN_FAILURE') {
        return {
            ...state,
            token: null,
        };
    } else if (action.type === 'LOGOUT') {
        return {
            ...state,
            token: null,
        };
    } else {
        return state;
    }
};

export default LoginReducer;
