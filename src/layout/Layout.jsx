import React from 'react';
import Header from '../sheare/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../sheare/Footer/Footer';

const Layout = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Layout;