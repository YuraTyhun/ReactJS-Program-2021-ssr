import React from 'react';

import ResultsFilter from '../../containers/ResultsFilter';
import ResultsSort from '../../containers/ResultsSort';

const ResultsMenu = () => (
    <div className="results-menu-container">
        <ResultsFilter />
        <ResultsSort />
    </div>
);

export default ResultsMenu;