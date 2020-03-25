import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';

import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';
import AboutPage from '../pages/AboutPage';

const MainRouter = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/gallery">
                        <GalleryPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default MainRouter; 






  