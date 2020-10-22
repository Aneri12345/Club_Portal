import React,{Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from "./Header";
import SignUp from './SignUp';
import Home from "./Home";
import Login from "./Login";
import ContactUs from "./ContactUs";
import ClubDetails from "./ClubDetails";
import HomeLoggedin from "./HeaderLoggedin";
import Verify from './Verify';
import ServerError from './ServerError';

class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/verify" component={Verify} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/contactUs" component={ContactUs} />
                    <Route path="/serverError" component={ServerError} />
                    <Route path="/clubDetails" component={ClubDetails} />
                    <Route path="/homeLoggedin" component={HomeLoggedin} />
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    };
}

export default Main;