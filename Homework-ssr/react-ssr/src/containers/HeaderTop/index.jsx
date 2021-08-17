import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router';

import { closeMovieDetails, openModal } from '../../store/actions';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { buildQueryString } from '../../util';

const HeaderTop = () => {
    const detailsMovie = useSelector(({movie: {detailsMovie}}) => detailsMovie);
    const query = useSelector(({ movie: { sortBy, filter, search } }) => ({sortBy, filter, search}));
    const dispatch = useDispatch();
    const router = useRouter();

    const handleShowAddModal = () => {
        dispatch(openModal('add'));
    };

    const handleCloseMovieDetails = () => {
        dispatch(closeMovieDetails());

        router.push({
            pathname: '/search',
            search: buildQueryString(query)
        })
    }

    return (
        <div className='header-top-container'>
            <Logo />
            {detailsMovie ? 
                (
                    <Button 
                        className="close-movie-details" 
                        onClick={handleCloseMovieDetails}
                        iconSrc="/images/search.svg"
                        iconAlt="search" />
                ) : ( 
                    <Button className="add-movie-btn" title='+ ADD MOVIE' onClick={handleShowAddModal}/> 
                )
            }
        </div>
    );
}

export default HeaderTop;