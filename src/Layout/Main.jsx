import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <React.Fragment>
            <div className='mx-2 md:mx-8'>
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Main;