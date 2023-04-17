import React from 'react';
import { Link } from 'react-router-dom';

function Comment(props)
{
    return <div className="d-flex flex-start mt-4 commentaire">
                <img className="rounded-circle shadow-1-strong me-3"
                src="\Image\LogoProfile.png" alt="avatar" width="65"
                height="65" />
                <div className="flex-grow-1 flex-shrink-1">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-1 colorText">
                        Utilisateur <p> <span className="small">{props.Date}</span> </p>
                    </h6>
                    </div>
                    <p className="small mb-0">
                    {props.content}
                    </p>
                </div>
                </div>
            </div>
}
export default Comment;