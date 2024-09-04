import { useState, useEffect } from 'react';
import EditUser from './EditUser';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserAction from '../redux/actions/user.action';

export default function User() {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    // Fonction pour revenir au mode d'affichage normal
    const handleCancelClick = () => {
        setIsEditing(false);
    };
    const token = useSelector((state) => state.login.token);
    const navigate = useNavigate();
    console.log(token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token == null) {
            console.log('test navigate');
            navigate('/Login');
        } else {
            console.log('else');
            dispatch(UserAction(token));
        }
    }, [token]);

    return (
        <div className="container">
            {isEditing ? (
                <div>
                    <EditUser onCancel={handleCancelClick} />
                </div>
            ) : (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                </div>
            )}
        </div>
    );
}
