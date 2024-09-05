const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
};

const UserReducer = (state = initialState, action) => {
    if (action.type === 'CHANGENAME') {
        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            userName: action.payload.userName,
        };
    }
    if (action.type === 'UPDATE_USERNAME') {
        return {
            ...state,
            userName: action.payload.userName,
        };
    } else {
        return state;
    }
};

export default UserReducer;
