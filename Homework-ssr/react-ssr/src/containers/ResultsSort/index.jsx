import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useRouter} from 'next/router';

import Select from '../../components/Select';
import { setSortBy } from '../../store/actions';
import { buildQueryString } from '../../util';
import { sortBy } from '../../util/constants';

const ResultsSort = () => {
    const query = useSelector(({ movie: { sortBy, filter, search } }) => ({sortBy, filter, search}));
    const dispatch = useDispatch();
    const router = useRouter();
    const {id} = router.query;

    const onSelect = e => {
        id 
            ? dispatch(setSortBy(e.target.value))
            : router.push({
                pathname: '/search',
                search: buildQueryString({...query, sortBy: e.target.value})
            });
    }

    return (
        <div className="results-sort-container">
            <div className="sortby-label">SORT BY</div>
            <Select onSelect={onSelect} sortOptions={sortBy} />
        </div>
    );
}

export default ResultsSort;