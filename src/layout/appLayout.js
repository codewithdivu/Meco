import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/footer';
class AppLayout extends Component {
    state = {}
    render() {
        return (
            <div className='container-fluid p-0'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    }
}

export default AppLayout;