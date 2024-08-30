const initialState = {
    firstName: '',
    lastName: '',
    token: null,
};

const UserReducer = (state = initialState, action) => {
    if (action.type === 'CHANGENAME') {
        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
        };
    } else {
        return state;
    }
};

export default UserReducer;
