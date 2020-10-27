import React,{Component} from 'react';
import {Navbar,NavbarBrand, Nav, Collapse, NavItem, NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class HeaderLoggedin extends Component{

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
                                        <NavLink onClick={this.toggleNav} className="nav-link " to="/home">
                                            <span className="fa fa-home fa-lg mr-2"></span>Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleNav} className="nav-link " to="/clubDetails">
                                            <span className="fa fa-star fa-lg mr-2"></span>Clubs
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleNav} className="nav-link " to="/contactUs">
                                            <span className="fa fa-phone fa-lg mr-2"></span>Contact Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleNav} className="nav-link " to="/">
                                            <span className="fa fa-sign-out fa-lg mr-2"></span>Sign Out
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

export default HeaderLoggedin;