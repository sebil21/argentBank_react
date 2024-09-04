const initialState = {
    userName: '',
};

const UpdateUserReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_USERNAME') {
        return {
            ...state,
            userName: action.payload.userName,
        };
    } else {
        return state;
    }
};

export default UpdateUserReducer;
