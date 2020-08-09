import React, { Component } from 'react';
import HomeSlider from './slider';
import Subscriptions from './../utils/subscribe';
import HomeArticles from './articles';

class Home extends Component {
    state = { 
        home: '',
     }
    render() { 
        return ( 
            <>
                <HomeSlider></HomeSlider>
                <Subscriptions></Subscriptions>
                <HomeArticles></HomeArticles>
            </>
         );
    }
}
 
export default Home;