export const UserAction = (firstName, lastName, token) => {
    return async (dispatch) => {
        const body = { firstName, lastName };
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            }
        );

        if (response.status === 200) {
            dispatch({
                type: 'CHANGENAME',
                payload: { firstName, lastName },
            });
        } else {
            alert('Erreur lors de la mise à jour du profil');
        }
    };
};
export default UserAction;

// Edition des infos user
