export const LoginAction = (email, password) => {
    return async (dispatch) => {
        const body = { email, password };
        const response = await fetch(
            'http://localhost:3001/api/v1/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
        );

        if (response.status === 200) {
            const data = await response.json();
            return dispatch({
                type: 'LOGIN_SUCCESS',
                payload: data.body.token,
            });
        } else {
            alert('Identifiant ou mot de passe incorrect');
        }
    };
};
export default LoginAction;

// Déconnexion
export const LogoutAction = () => {
    return {
        type: 'LOGOUT',
    };
};
