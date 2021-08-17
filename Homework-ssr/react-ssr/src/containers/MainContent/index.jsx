import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';

import ResultsMenu from '../../components/ResultsMenu';
import ResultsCount from '../../components/ResultsCount';
import MoviesList from '../MoviesList';
import NoMoviesFound from '../../components/NoMovieFound';
import { getMovies, updateStateFromUrlParams } from '../../store/actions';

const MainContent = () => {
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);
    const {filter, sortBy, search} = useSelector(({movie: {filter, sortBy, search}}) => ({filter, sortBy, search}));
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(updateStateFromUrlParams(router.query));
        dispatch(getMovies());
      }, [dispatch, filter, sortBy, search, router.query]);

    return !activeModal && (
        <main className="main-content">
            <ResultsMenu />
            <ResultsCount />
            <MoviesList />
            <NoMoviesFound />
        </main>
    );
}

export default MainContent;