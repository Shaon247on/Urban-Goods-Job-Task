import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default Main;