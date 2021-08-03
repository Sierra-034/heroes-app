import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const authContext = useContext(AuthContext);

    const handleLogin = () => {
        authContext.dispatch({
            type: types.login,
            payload: {
                name: 'Samuel'
            }
        });
        history.replace('/');
    };

    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};