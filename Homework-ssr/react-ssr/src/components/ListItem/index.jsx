import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItem = ({ title, isActive, setFilter }) => { 
    const itemClasses = classNames({
        'list-item': true,
        'active': isActive
    })

    return (
        <li className={itemClasses} onClick={setFilter}>{title}</li>
    );
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setFilter: PropTypes.func.isRequired
};

export default ListItem;

