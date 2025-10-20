import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';


const ErrorAppNotFound = () => {
    const error = useRouteError()
    return <div>{error.message}</div>
};

export default ErrorAppNotFound;