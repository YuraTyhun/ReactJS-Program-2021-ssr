import React from 'react';
import {useSelector} from 'react-redux';

const ResultsCount = () => {
    const totalAmount = useSelector(({movie: {totalAmount}}) => totalAmount);

    return (
        <div className="results-count-container">
            <span>{totalAmount} </span>
            <span>movies found</span>
        </div>
    );
}

export default ResultsCount;