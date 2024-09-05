export const UserAction = (token) => {
    return async (dispatch) => {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (response.ok) {
            const data = await response.json();
            const userData = {
                firstName: data.body.firstName,
                lastName: data.body.lastName,
                userName: data.body.userName,
            };
            dispatch({
                type: 'CHANGENAME',
                payload: userData,
            });
        } else {
            alert('Erreur lors de la mise à jour du profil');
        }
    };
};
export default UserAction;
