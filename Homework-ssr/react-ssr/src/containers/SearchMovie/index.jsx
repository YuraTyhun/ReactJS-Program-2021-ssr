import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { buildQueryString } from '../../util';

const SearchMovie = () => {
    const router = useRouter();
    const {search} = router.query;
    const query = useSelector(({ movie: { sortBy, filter, search } }) => ({sortBy, filter, search}));
    const [value, setValue] = useState(search || '')

    const onHandleClick = () => {
        router.push({
            pathname: '/search',
            search: buildQueryString({...query, search: value})
        });
    }

    const onHandleChange = (e) => setValue(e.target.value);

    return (
        <div className="search-movie-container">
            <Input 
                value={value}
                onChange={onHandleChange} />
            <Button 
                className="search-movie-btn" 
                title="SEARCH"
                onClick={onHandleClick} />
        </div>
    );
}

export default SearchMovie;