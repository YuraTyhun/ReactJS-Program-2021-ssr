import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ sortOptions, onSelect }) => (
    <div className="select-sort">
        <select onChange={onSelect}>
            {sortOptions.map(option => (
                <option value={option.value} key={option.id}>{option.label}</option>
            ))}
        </select>
    </div>
);

Select.propTypes = {
    sortOptions: PropTypes.array,
    onSelect: PropTypes.func
};

export default Select;