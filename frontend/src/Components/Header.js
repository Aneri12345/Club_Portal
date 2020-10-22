import React,{Component} from 'react';
import {Navbar,NavbarBrand, Nav, Collapse, NavItem, NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalLoginOpen : false,
            email:'',
            password:'',
            isNavOpen: false,
            touched: {
                email: false,
                password: false,
            }
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return(
            <div>
                    <Navbar className="color-nav" dark expand="md">
                        <div className="container">
                            <NavbarBrand>AU Clubs</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav}/>
                            <Collapse isOpen={this.state.isNavOpen} className="d-flex justify-content-end" navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link " to="/home">
                                            <span className="fa fa-home fa-lg mr-2"></span>Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link " to="/login">
                                            <span className="fa fa-sign-in fa-lg mr-2"></span>Login
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link " to="/signUp">
                                            <span className="fa fa-user fa-lg mr-2"></span>Sign Up
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link " to="/clubDetails">
                                            <span className="fa fa-star fa-lg mr-2"></span>Clubs
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link " to="/contactUs">
                                            <span className="fa fa-phone fa-lg mr-2"></span>Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
            </div>
        );
    }
}

export default Header;
/*DO MORE THINGS THAT MAKE YOU FORGET TO CHECK YOUR PHONE */