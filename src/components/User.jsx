import { useState, useEffect } from 'react';
import EditUser from './EditUser';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserAction } from '../redux/actions/user.action';

export default function User() {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };
    const token = useSelector((state) => state.login.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (token == null) {
            navigate('/Login');
        } else {
            dispatch(UserAction(token));
        }
    }, [token, navigate, dispatch]);

    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

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
                        {firstName} {lastName} !
                    </h1>
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                </div>
            )}
        </div>
    );
}
