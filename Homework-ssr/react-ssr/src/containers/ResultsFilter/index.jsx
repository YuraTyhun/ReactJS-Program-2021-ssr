import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';

import { setFilter } from '../../store/actions';
import ListItem from '../../components/ListItem';
import { buildQueryString } from '../../util';

const genres = [
    { id: 1, value: '', title: 'ALL' },
    { id: 2, value: 'Action', title: 'ACTION' },
    { id: 3, value: 'Comedy', title: 'COMEDY' },
    { id: 4, value: 'Horror', title: 'HORROR' },
    { id: 5, value: 'Crime', title: 'CRIME' },
    { id: 6, value: 'Drama', title: 'DRAMA' }
];

const ResultsFilter = () => {
    const query = useSelector(({ movie: { sortBy, filter, search } }) => ({sortBy, filter, search}));
    const dispatch = useDispatch();
    const router = useRouter();
    const {id} = router.query;

    const handleSetFilter = (filter) => {
        id 
            ? dispatch(setFilter(filter))
            : router.push({
                pathname: '/search',
                search: buildQueryString({...query, filter})
            });
    }

    return (
        <nav>
            <ul className="results-filter-list">
                {genres.map(genre => (
                    <ListItem 
                        key={genre.id} 
                        title={genre.title}
                        isActive={genre.value === query.filter} 
                        setFilter={() => handleSetFilter(genre.value)}/>
                ))}
            </ul>
        </nav>
    );
}

export default ResultsFilter;
