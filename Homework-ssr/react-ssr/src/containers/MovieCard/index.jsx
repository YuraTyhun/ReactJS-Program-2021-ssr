import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import Link from 'next/link';

import { openModal, showMovieDetails } from '../../store/actions';

import Button from '../../components/Button';
import MovieTitle from '../../components/MovieTitle';
import MovieRelease from '../../components/MovieRelease';
import MovieGenres from '../../components/MovieGenres';
import ContextMenu from '../../components/ContextMenu';
import { handleImgError } from '../../util';

const MovieCard = ({movieData, movieData: { id, title, poster_path, release_date, genres } }) => {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const dispatch = useDispatch();

    const onToggleMenu = () => {
        setShowContextMenu(showContextMenu => !showContextMenu);
    }

    const handleShowMovieDetails = useCallback(() => {
        console.log(movieData);
        dispatch(showMovieDetails(movieData));
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [dispatch, movieData]);

    const showModal = (action) => {
        dispatch(openModal(action, movieData));
    };

    const handleMouseLeave = () => {
        setShowContextMenu(false);
    }

    return (
        <div className="movie-card-container" onMouseLeave={handleMouseLeave}>
            <Link href={`/film/${id}`}>
                <button
                    onClick={handleShowMovieDetails}
                    className="movie-card-poster-btn"
                >
                    <img src={poster_path} alt={title} className="movie-card-poster" onError={handleImgError}/>
                </button>
            </Link>
            <div className="movie-card-metadata">
                <MovieTitle title={title} />
                <MovieRelease releaseDate={release_date} />
            </div>
            <MovieGenres genres={genres} />
            <Button 
                className="movie-card-menu-icon" 
                onClick={onToggleMenu}
                iconSrc="/images/context-menu.svg"
                iconAlt="context menu" />
            <ContextMenu
                showContextMenu={showContextMenu} 
                closeContextMenu={onToggleMenu}
                showModal={showModal} 
            />
        </div>
    );
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string)
    })
};

MovieCard.defaultProps = {
    movieData: null
};

export default MovieCard;