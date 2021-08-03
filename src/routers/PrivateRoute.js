import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    const handleComponent = (props) => {
        return (isAuthenticated)
            ? <Component {...props} />
            : <Redirect to='/login' />
    };

    return (
        <Route
            {...rest}
            component={handleComponent}
        />
    );
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};
