import React, { Component } from 'react';
import axios from 'axios';
import { URL_SUBS } from './path';

class Subscriptions extends Component {
    state = { 
        email: '',
        error: false,
        success: false,
        alreadyIn: false,
    }

    clearMessages = () => {
        setTimeout( () => (
            this.setState({
                error: false,
                success: false,
                alreadyIn: false
            })
        ), 2000)
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    saveSubscription = (email) => {
        async function fetchSub() {
                const response = await axios.get(`${URL_SUBS}/?email=${email}`);
                console.log(response.data);
                
                if( !response.data.length){
                    const post_resp = await axios(URL_SUBS, {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        data: JSON.stringify({email})
                    });

                    /*
                    this.setState({
                        email: '',
                        success: true,
                    });
                   
                    /* 
                    this.clearMessages();
                    */
                }
                else{
                    // already in
                }
        }

        fetchSub();
    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        const regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
            this.setState({success: true});
            this.saveSubscription(email);
            this.clearMessages();
        }
        else{
            this.setState({error: true});
            this.clearMessages();
        }
    }

    render() {  
        const state = this.state;

        return ( 
            <div className="subscribe_panel">
                <h3>Subscribe to use</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            value={state.email}
                            placeholder='youremail@blabla.com'
                            onChange={this.onChangeInput}
                        />
                        <div className={state.error ? "error show" : "error"}>Check Email</div>
                        <div className={state.success? "success show" : "success"}>Thank You</div>
                        <div className={state.alreadyIn ? "success show" : "success"}>You are already in the DB</div>
                    </form>
                </div>
                <small>
                    Lorem Ipsum dolor sit anet, dfjjhfjjsfijsid
                </small>
            </div>
         );
    }
}
 
export default Subscriptions;