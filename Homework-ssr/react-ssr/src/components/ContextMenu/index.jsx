import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const ContextMenu = ({showContextMenu, closeContextMenu, showModal }) => {

    return showContextMenu && (
        <>
            <div className="movie-context-menu">
                <Button 
                    className="movie-context-menu-close-btn" 
                    onClick={closeContextMenu}
                    iconSrc="/images/close.svg"
                    iconAlt="close" />
                <ul>
                    <li 
                        className="movie-context-menu-item"
                        onClick={() => showModal('edit')}
                    >
                        Edit
                    </li>
                    <li
                        className="movie-context-menu-item"
                        onClick={() => showModal('delete')}
                    >
                        Delete
                    </li>
                </ul>
            </div>
        </>

    );
}

ContextMenu.propTypes = {
    showContextMenu: PropTypes.bool.isRequired,
    closeContextMenu: PropTypes.func.isRequired
}

export default ContextMenu;