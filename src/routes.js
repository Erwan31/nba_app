import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/index';
import Footer from './components/teams/footer';
import Header from './components/teams/header';

const Routes = () => {
    return ( 
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
        <Footer/>
        </BrowserRouter>
     );
}
 
export default Routes;