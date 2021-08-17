import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import Head from 'next/head';

import Button from '../src/components/Button';
import Logo from '../src/components/Logo';

const NotFoundPage = () => (
    <>
        <Head>
            <title>Page Not Found</title>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <div className="not-found-page-container">
            <div className="not-found-page-header">
                <Logo />
            </div>
            <div className="not-found-page-main">
                <h1 className="not-found-page-title">Page Not Found</h1>
                <img src="/images/not-found.png" alt="not found" className="not-found-page-logo"/>
                <Link href="/">
                    <Button title="GO BACK TO HOME" className="not-found-page-btn"/>
                </Link>
            </div>
            <div className="not-found-page-footer footer-container">
                <Logo />
            </div>
        </div>
    </>
);

export default NotFoundPage;