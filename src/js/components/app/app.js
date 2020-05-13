import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Header from '../header';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    VehiclesPage,
} from '../pages';
import ErrorBoundary from '../error-boundary';
import SwapiProvider from '../swapi-service-context';
import SwapiService from '../../service/swapi-service';

import './app.scss';

function App() {
    const swapiService = new SwapiService();

    function welcome() {
        return (
            <h1 className='welcome-title'>
                Welcome to Swapi&nbsp;Api
            </h1>
        );
    }

    function pageNotFound() {
        return (
            <h2 className='page-not-found-title'>Page not found</h2>
        );
    }

    return (
        <SwapiProvider.Provider value={swapiService}>
            <Router>
                <ErrorBoundary>
                    <Header />
                    <ErrorBoundary>
                        <main>
                            <Switch>
                                <Route
                                    path='/'
                                    exact
                                    render={welcome}
                                />
                                <Route
                                    path='/characters/:id?'
                                    component={PeoplePage}
                                />
                                <Route
                                    path='/planets/:id?'
                                    component={PlanetsPage}
                                />
                                <Route
                                    path='/starships/:id?'
                                    component={StarshipsPage}
                                />
                                <Route
                                    path='/vehicles/:id?'
                                    exact
                                    component={VehiclesPage}
                                />
                                <Route render={pageNotFound} />
                            </Switch>
                        </main>
                    </ErrorBoundary>
                </ErrorBoundary>
            </Router>
        </SwapiProvider.Provider>
    );
}

export default App;
