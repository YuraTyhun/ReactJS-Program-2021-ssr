import React from 'react';
import Head from 'next/head';

import Header from '../src/containers/Header';
import ModalWindow from '../src/containers/ModalWindow';
import Footer from '../src/components/Footer';
import NoMoviesFound from '../src/components/NoMovieFound';

const StartPage = () => (
    <>
        <Head>
            <title>Start Page</title>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>    
        <Header />
        <ModalWindow />
        <NoMoviesFound />
        <Footer />
    </>
);

export default StartPage;