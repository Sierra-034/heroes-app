import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route path='/marvel' component={MarvelScreen} />
                    <Route path='/heroe/:heroeId' component={HeroScreen} />
                    <Route path='/dc' component={DcScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    );
};
