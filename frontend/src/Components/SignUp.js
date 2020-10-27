import React,{Component} from 'react';
import {Form, FormGroup, CardHeader, Input, Label, Button, Card,CardBody,Container, FormFeedback} from 'reactstrap';
import axios from 'axios';
import Verify from './Verify';
import { Redirect } from 'react-router-dom';

class SignUp extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            firstName: '',
            lastName: '',
            roll: '',
            email: '',
            password: '',
            confirmPassword: '',
            redirectVar: false,
            signUpError: '',
            serverError: false,
            touched: {
                firstName: false,
                lastName: false,
                roll: false,
                email: false,
                password: false,
                confirmPassword: false,
            }
        }
        this.handlerBlur = this.handlerBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp(){
        var data = {
            email: this.state.email
        }

        axios.post('http://localhost:5000/verify', data)
            .then(responseData =>{
                console.log(responseData.data);
                if(responseData.data.success) {
                    this.setState({
                        redirectVar: true,
                        otp: responseData.data.data.otp
                    });
                } else if(responseData.data.serverError){
                    this.setState({
                        serverError: true,
                    })
                } else{
                    this.setState({
                        signUpError: responseData.data.msg,
                    })
                }
            })
    }

    //Check if element activated
    handlerBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true},
        });
    }
    //set values in state
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    validate(firstName, lastName, roll, email, password, confirmPassword) {
        const errors = {
            firstName: '',
            lastName: '',
            roll: '',
            email: '',
            password: '',
            confirmPassword: '',
        }

        if(this.state.touched.firstName && firstName.length < 3) {
            errors.firstName = 'First name should be greater than 2 characters';
        } else if(this.state.touched.firstName && firstName.length > 10) {
            errors.firstName = 'First name should be less than 11 characters';
        } 
        
        if(this.state.touched.lastName && lastName.length < 3) {
            errors.lastName = 'Last Name should be greater than 2 characters';
        } else if(this.state.touched.lastName && lastName.length > 10) {
            errors.lastName = 'Last Name should be less than 11 characters';
        }

        const reg = /^\d+$/;
        if(this.state.touched.roll && !reg.test(roll)) {
            errors.roll = 'Roll number should be a number only.'
        } else if(roll.length !== 7 && this.state.touched.roll) {
            errors.roll = 'Roll number should be exactly 7 numbers.'
        }

        if(this.state.touched.email && email.split('@').filter(x => x === 'ahduni.edu.in').length !== 1) {
            errors.email = 'Email should contain @ahduni.edu.in';
        }

        if(this.state.touched.password && password.length < 8) {
            errors.password = 'Length of password should be >= 8.'
        }

        if(this.state.touched.password && this.state.touched.confirmPassword && password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match.';
        }

        return errors;

    }

    render(){
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.roll, this.state.email, this.state.password, this.state.confirmPassword)
        if(this.state.redirectVar){
            return(
                <Verify data ={this.state}/>
            )
        } else if(this.state.serverError) {
            return(
                <Redirect to="/ServerError" />
            )
        } else {
            return (
                <div className="container d-flex justify-content-center">
                <Card className="col-md-6">
                    <CardHeader style={{backgroundColor: "white"}}><div className="d-flex justify-content-center">Welcome</div></CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input className="mt-2 mb-2" type="text" name="firstName" onChange={this.handleInputChange} placeholder="First Name" id="firstName" 
                                onBlur={this.handlerBlur('firstName')} valid={errors.firstName === ''} invalid={errors.firstName !== ''} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="firstName">Last Name</Label>
                                <Input className="mt-2 mb-2" type="text" name="lastName" onChange={this.handleInputChange} placeholder="Last Name" id="lastName"
                                onBlur= {this.handlerBlur('lastName')} valid={errors.lastName ===''} invalid={errors.lastName!==''} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="roll">AU roll no.</Label>
                                <Input className="mt-2 mb-2" type="number" name="roll" onChange={this.handleInputChange} placeholder="AU roll no." id="roll"
                                onBlur={this.handlerBlur('roll')} valid={errors.roll === ''} invalid={errors.roll !== ''} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.roll}</FormFeedback>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="email">E-mail</Label>
                                <Input className="mt-2 mb-2" type="email" name="email" pattern="[a-z0-9._%+-]+@ahduni.edu.in" onChange={this.handleInputChange} placeholder="Ahd mail" id="email"
                                onBlur={this.handlerBlur('email')} valid={errors.email === '' || this.state.signUpError} invalid={errors.email !== '' || this.state.signUpError !== ''} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email} {this.state.signUpError}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input className="mt-2 mb-2" type="password" name="password" onChange={this.handleInputChange} placeholder="Password" id="password"
                                onBlur={this.handlerBlur('password')} valid={errors.password === ''} invalid={errors.password !== ''} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input className="mt-2 mb-2" type="password" name="confirmPassword" onChange={this.handleInputChange} placeholder="Confirm Password" id="ConfirmPassword"
                                onBlur={this.handlerBlur('confirmPassword')} valid={errors.confirmPassword === ''} invalid={errors.confirmPassword !== ''} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.confirmPassword}</FormFeedback> 
                                <div className="d-flex justify-content-center">
                                    <Button className="btn btn-success btn-md m-2"  onClick={this.handleSignUp}>Sign Up</Button><br/>
                                </div>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
                </div>
                )
            }
        }
}
export default SignUp;