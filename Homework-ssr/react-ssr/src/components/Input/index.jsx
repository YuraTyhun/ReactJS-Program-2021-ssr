import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, onChange}) => (
    <input 
        type="text"
        className="search-input-field"
        placeholder="What do you want to watch?"
        value={value}
        onChange={onChange} />
);

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;

