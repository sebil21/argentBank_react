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
        console.log(response.body);
        if (response.ok) {
            const data = response.json();
            const userData = {
                firstName: data.body.firstName,
                lastName: data.body.lastName,
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

// Edition des infos user
