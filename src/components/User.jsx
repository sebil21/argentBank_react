import { useState } from 'react';
import EditUser from './EditUser';

export default function User() {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Fonction pour revenir au mode d'affichage normal
    const handleCancelClick = () => {
        setIsEditing(false);
    };

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
