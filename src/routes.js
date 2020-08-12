import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/index';
import Footer from './components/teams/footer';
import Header from './components/teams/header';
import Article from './components/articles/index';
import Teams from './components/teams/index';

const Routes = () => {
    return ( 
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/article/:id" component={Article}></Route>
                <Route path="/teams" component={Teams}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
        <Footer/>
        </BrowserRouter>
     );
}
 
export default Routes;