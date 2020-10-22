import React,{Component} from 'react';
import {Form, FormGroup, Input, Label, Button, Card,CardBody,Container, CardHeader, FormFeedback} from 'reactstrap';
import {NavLink, Redirect} from 'react-router-dom';
import axios from 'axios';
class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            login: "",
            password: "",
            redirectVar: false,
            loginError: '',
            touched: {
                loginButton: false,
                email: false,
                password: false,
            }
        }

       // this.checkLoginStatus = this.checkLoginStatus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleLoginSubmit(){
        console.log("here");
        let data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:5000/login', data)
            .then(response => {
                if(response.data.success){
                    this.setState({
                        redirectVar : true,
                    })
                } else {
                    this.setState({
                        loginError:  response.data.msg,
                    })
                }
            })
    }

    render(){
        if(this.state.redirectVar){
            return(
                <Redirect to="/homeLoggedin" />
            )
        }
        else{
            return (
                <div className="container d-flex justify-content-center">
                    <Card className="col-4 mt-5">
                        <CardHeader><div className="d-flex justify-content-center">Welcome Back</div></CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input type="email" name="email" pattern="[a-z0-9._%+-]+@ahduni.edu.in" onChange={this.handleInputChange} valid={this.state.loginError === ''} invalid={this.state.loginError !== ''} placeholder="Ahd mail" id="email"/>
                                    <FormFeedback>{this.state.loginError}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" name="password" onChange={this.handleInputChange} placeholder="Password" id="password"/>
                                </FormGroup>
                                <FormGroup>
                                    <div className="d-flex justify-content-center">
                                        <Button className="btn btn-success btn-md" onClick={this.handleLoginSubmit}>Login</Button><br/>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <div className="d-flex justify-content-center">
                                        <Button className="btn btn-sm" color="primary">Sign Up</Button><br/>
                                    </div>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
                );
        }
    
     }
}
export default Login;