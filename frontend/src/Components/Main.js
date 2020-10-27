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
import IdClub from './IdClub';
import allClubs from '../Shared/AllClubs';

class Main extends Component{
    render(){
        let ClubWithName = ({match}) => {
            return(
                <IdClub club={allClubs.filter((club) => club.nickName === (match.params.name))[0]} />
            );
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/verify" component={Verify} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/contactUs" component={ContactUs} />
                    <Route path="/serverError" component={ServerError} />
                    <Route path="/clubDetails" component={ClubDetails} />
                    <Route path='/home/:name' component={ClubWithName} />
                    <Route path="/homeLoggedin" component={HomeLoggedin} />
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    };
}

export default Main;