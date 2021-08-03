import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    const handleComponent = (props) => {
        return (!isAuthenticated)
            ? <Component {...props}/>
            : <Redirect to='/' />
    };
    
    return (
        <Route
            {...rest}
            component={handleComponent}
        />
    )
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};
