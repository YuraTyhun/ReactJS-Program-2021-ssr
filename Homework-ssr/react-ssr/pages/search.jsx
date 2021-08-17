import React from 'react';
import Head from 'next/head';

import Header from '../src/containers/Header';
import MainContent from '../src/containers/MainContent';
import ModalWindow from '../src/containers/ModalWindow';
import Footer from '../src/components/Footer';

const SearchPage = () => (
    <>
        <Head>
            <title>Search Page</title>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <Header />
        <MainContent />
        <ModalWindow />
        <Footer />        
    </>
);

export default SearchPage;