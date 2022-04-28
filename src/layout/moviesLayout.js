import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class MoviesLayout extends Component {
    render() {
        return (<Outlet />);
    }
}

export default MoviesLayout;