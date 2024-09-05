import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserAction } from '../redux/actions/updateUser.action';

export default function EditUser({ onCancel }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.token);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const userName = useSelector((state) => state.user.userName);

    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
    });

    useEffect(() => {
        setFormData({
            userName: userName,
            firstName: firstName,
            lastName: lastName,
        });
    }, [userName, firstName, lastName]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(UpdateUserAction(token, formData.userName));
        onCancel();
    };

    return (
        <div className="header">
            <h2>Edit user info</h2>
            <form onSubmit={handleSave} className="edit-user-form">
                <div className="form-group">
                    <label htmlFor="username">User Name : </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name : </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name : </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="edit-button-user">
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="edit-button-user"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
