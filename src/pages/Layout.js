// src/components/Layout.js
import React from 'react';
import { Topbar } from './Topbar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Footer1 from './Footer1';

const Layout = ({ children }) => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <main>{children}</main>
            <Footer1 />
        </div>
    );
};

export default Layout;
