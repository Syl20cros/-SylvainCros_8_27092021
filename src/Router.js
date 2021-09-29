import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
// import Lodging from 'pages/lodging/Lodging';
import Error from './pages/error/Error';

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
                path: '*',
                component: Error
            }
        ];

        return (
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}

                {/* <Route
                    exact
                    path={'/fiche/:id'}
                    component={({ match }) => <Lodging match={match} />}></Route>  */}
            </Switch>
        );
    }
}

export default Router;
