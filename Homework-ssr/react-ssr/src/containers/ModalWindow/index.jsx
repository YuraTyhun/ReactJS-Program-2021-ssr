import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { closeModal } from '../../store/actions';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import DeleteMovie from '../ModalWindow/DeleteMovie';
import EditMovie from '../ModalWindow/EditMovie';
import AddMovie from '../ModalWindow/AddMovie';

const ModalWindow = () => {
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);
    const activeMovie = useSelector(({movie: {activeMovie}}) => activeMovie);

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    const handleKeydownEvent = useCallback(e => {
        e.key === 'Escape' && dispatch(closeModal())
    }, [dispatch]);

    useEffect(() => {
        if(activeModal) {
            window.addEventListener('keydown', handleKeydownEvent);
        }
        return () => {
            window.removeEventListener('keydown', handleKeydownEvent);
        }
    }, [activeModal, handleKeydownEvent]);

    const containerClasses = classNames({
        'modal-window-container': true,
        'active-modal-height': activeModal === 'delete'
    });

    return activeModal && (
        <div className={containerClasses}>
            <div className="blur-filter">
                <Logo />
                <div className="modal-window-wrapper">
                    <Button
                        className="modal-window-close-btn"
                        onClick={handleCloseModal}
                        iconSrc="/images/close.svg"
                        iconAlt="close" />
                    <div className="modal-window-body">
                        {activeMovie && <DeleteMovie title="DELETE MOVIE" movieId={activeMovie.id} />}
                        {activeMovie && <EditMovie modalTitle="EDIT MOVIE" movie={activeMovie} /> }
                        <AddMovie modalTitle="ADD MOVIE"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;