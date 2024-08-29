// export default function User() {
//     return (
//         <div className="header">
//             <h1>
//                 Welcome back
//                 <br />
//                 Tony Jarvis!
//             </h1>
//             <button className="edit-button">Edit Name</button>
//         </div>
//     );
// }

// // à modifier avec les informations de connexion ?

import React, { useState } from 'react';
import EditUser from './EditUser'; // Assurez-vous que le chemin est correct

export default function User() {
    // État pour déterminer si le composant EditUser doit être affiché
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour basculer l'état d'édition
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
