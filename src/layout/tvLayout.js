import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class TVLayout extends Component {
    render() {
        return (<Outlet />);
    }
}

export default TVLayout;