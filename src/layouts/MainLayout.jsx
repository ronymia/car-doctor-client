import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../pages/shared';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayout;
