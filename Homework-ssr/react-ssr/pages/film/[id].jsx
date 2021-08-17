import React from 'react';
import Head from 'next/head';

import MainContent from '../../src/containers/MainContent';
import MovieDetailsContainer from '../../src/containers/MovieDetailsContainer';
import Footer from '../../src/components/Footer';

const DetailsPage = () => (
    <>
        <Head>
            <title>Movie Details</title>
            <link rel="icon" href="/img/favicon.ico" />
        </Head>
        <MovieDetailsContainer />
        <MainContent />
        <Footer />
    </>
);

export default DetailsPage;
