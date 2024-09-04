import { useState } from 'react';
export default function EditUser({ onCancel }) {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
    };
    return (
        <div className="header">
            <h2>Edit user info</h2>
            <form onSubmit={handleSave} className="edit-user-form">
                {/* <div className="form-group">
                    <label htmlFor="username">User Name : </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="firstName">First Name : </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
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
                        required
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
