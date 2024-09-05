export const UpdateUserAction = (token, userName) => {
    return async (dispatch) => {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ userName: userName }),
            }
        );
        if (response.ok) {
            const data = await response.json();
            const updatedUserData = {
                userName: data.body.userName,
            };
            dispatch({
                type: 'UPDATE_USERNAME',
                payload: updatedUserData,
            });
        } else {
            alert('Erreur lors de la mise à jour du profil');
        }
    };
};
