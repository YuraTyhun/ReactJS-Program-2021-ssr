import React from 'react';
import PropTypes from 'prop-types';

const MovieTitle = ({ title }) => (
    <div className="movie-title">{title}</div>
);

MovieTitle.propTypes = {
    title: PropTypes.string.isRequired
};

MovieTitle.defaultProps = {
    title: ''
};


export default MovieTitle;