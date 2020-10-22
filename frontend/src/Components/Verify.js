import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {Label, Input, Button, FormFeedback} from 'reactstrap';

class Verify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectVar: false,
            verifyError: '',
            serverError: false,
            otp: '',
            touched: {
                otp: false,
            }
        }

        this.handleVerification = this.handleVerification.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlerBlur = this.handlerBlur.bind(this);
    }

    handlerBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true},
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    async handleVerification() {
        console.log("be otp:" + this.props.data.otp + " user otp=" + this.state.otp);
        if(this.props.data.otp == this.state.otp) {
            const data = {
                firstName: this.props.data.firstName,
                lastName: this.props.data.lastName,
                roll: this.props.data.roll,
                email: this.props.data.email,
                password: this.props.data.password,
                otp: this.state.otp,
            }
    
            axios.post('http://localhost:5000/signUp', data)
                .then( dataResponse => {
                    if(dataResponse.data.success) {
                        this.setState({
                            redirectVar: true,
                        });
                        console.log("Successfull");
                    } else if(dataResponse.data.serverError){
                        this.setState({
                            serverError: true,
                        })
                    } else {
                        this.setState({
                            verifyError: 'Wrong OTP!',
                        })
                    }
                });
        }
    }

    render() {
        console.log('Props are: ' + this.props.data.firstName);
        if(this.state.redirectVar) {
            return(
                <Redirect to='/home' />
            );
        } else if(this.state.serverError){
            return(
                <Redirect to="serverError" />
            );
        } else {
            return(
                <div>
                    <div className="container">
                        <Label htmlFor="otp">OTP</Label>
                        <Input className="mt-3 mb-3" onChange={this.handleInputChange}
                            id="otp" name="otp" valid={this.state.verifyError === ''} invalid={this.state.verifyError !== ''}
                            onBlur={this.handlerBlur('otp')} type='number' />
                        <FormFeedback>{this.state.verifyError}</FormFeedback>
                        <Button onClick={this.handleVerification} type="button" color="success">Verify</Button>
                    </div>
                </div>
            );
        }
    }
}

export default Verify;