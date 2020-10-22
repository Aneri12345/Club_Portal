import React,{Component} from 'react';
import contactUs from '../Shared/ContactUsDetails';
import {Jumbotron, Container, Card, CardBody} from 'reactstrap';
function RenderUs(props){
    var details = props.contact.map((us)=>{
        return(
            <div className="d-flex justify-content-center">
                <Card className="col-10 m-2">
                    <h2  className="d-flex justify-content-center">{us.name}</h2>
                    <div className="row ml-5 d-flex justify-content-start">
                        <img src={us.image} className="img-fluid mb-3" width="15%" height="15%" />
                        <div className="m-3">
                            <h5>Role: Website Creator</h5><br/>
                            <h5>Email: {us.email}</h5><br/>
                            <h5>Contact Number: {us.contactNumber}</h5><br/>
                            <h5>Contact us on: <a href={us.link}><span className="fa fa-linkedin-square fa-lg"></span></a> </h5>
                        </div>
                    </div>
                </Card>
            </div>
                
        )
    })
    return details;
}

class ContactUs extends Component{

    render(){
        return (
        <div>
            <RenderUs contact = {contactUs}/>
        </div>
        )
    }
}
export default ContactUs;