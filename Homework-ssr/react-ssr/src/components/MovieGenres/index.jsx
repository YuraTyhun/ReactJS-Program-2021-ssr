import React from 'react';
import PropTypes from 'prop-types';

const MovieGenres = ({ genres }) => (
    <div className="movie-genres">{genres.join(', ')}</div>
);

MovieGenres.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieGenres;