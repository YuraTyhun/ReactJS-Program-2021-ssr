import React from 'react';
import PropTypes from 'prop-types';

const MovieRelease = ({releaseDate}) => (
    <div className="movie-release-date">{new Date(releaseDate).getFullYear()}</div>
);

MovieRelease.propTypes = {
    releaseDate: PropTypes.string.isRequired
}

export default MovieRelease;