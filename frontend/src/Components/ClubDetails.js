import React,{Component} from 'react';
import allClubs from '../Shared/AllClubs';
import {  Container, Jumbotron } from 'reactstrap';

function RenderClubs(props){
   console.log('ALL CLUBS=' + props.allclubs);
   var clubs= props.allclubs.map((club) => {
       console.log('in map');
        return(
            <div>
                    <Jumbotron className="border-dark">
                        <h1 className="d-flex justify-content-center">{club.name} </h1>
                        <div className='row mt-4 ml-4'>
                            <img src={club.secretaryImage} className="img-fluid img-circle " width="15%" height="15%" />
                            <div className="m-4">
                                <h5>Designation/Post: Club Secretary</h5><br/>
                                <h5 >Name : {club.secretaryName}</h5><br/>
                                <h5 >Email: {club.email}</h5><br/>
                                <h5>Follow us on: <a href={club.link} className="text-primary deco-none"><span className="fa fa-instagram fa-lg"></span></a></h5>
                            </div>
                        </div>
                        <p className="m-4">{club.description}</p>
                    </Jumbotron>
            </div>
        );
   });
   return clubs;
} 

class ClubDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            clubs : allClubs
        }
    }
    render(){
        return (
                <div>
                    <RenderClubs allclubs = {this.state.clubs} />
                </div>
            )
    }
}
export default ClubDetails;