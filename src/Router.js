import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Error from './pages/error/Error';
import Lodging from './pages/lodging/Lodging';

class Router extends React.Component {
    render() {
        const routes = [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/about',
                component: About,
                exact: true
            },
            {
                path: '/lodgement/:id',
                component: Lodging,
                exact: true
            },
            {
                path: '*',
                component: Error
            }
        ];

        return (
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        );
    }
}

export default Router;
