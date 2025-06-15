import React from 'react'
import { useAuthContext } from './auth-context-provider';
import { Navigate, Outlet } from 'react-router';

const WithAdminProvider = () => {

    const {authenticatedUser} = useAuthContext();
    console.log("Authenticated User in Admin Provider: ", authenticatedUser?.user);
    const isAdmin = authenticatedUser?.user?.roles?.includes('HOTEL_MANAGER') || true;

    if(!isAdmin) {
        return <Navigate to="/" />
    }
    return <Outlet />;
}

export default WithAdminProvider;
