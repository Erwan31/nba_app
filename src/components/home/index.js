import React, { Component } from 'react';
import HomeSlider from './slider';
import Subscriptions from './../utils/subscribe';

class Home extends Component {
    state = { 
        home: '',
     }
    render() { 
        return ( 
            <>
                <HomeSlider></HomeSlider>
                <Subscriptions></Subscriptions>
            </>
         );
    }
}
 
export default Home;