import React from 'react';
import MainContent from '../../containers/MainContent';
import MovieDetailsContainer from '../../containers/MovieDetailsContainer';
import Footer from '../Footer';

const DetailsPage = () => (
    <>
        <MovieDetailsContainer />
        <MainContent />
        <Footer />
    </>
);

export default DetailsPage;
