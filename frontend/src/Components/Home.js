import React, {Component} from 'react';
import {Card,CardImg,CardHeader,CardFooter} from 'reactstrap';
import  allClubs from '../Shared/AllClubs';

function RenderClubs(props){
    var printClubs = props.clubNames.map((club) =>{
        console.log(club);
        return(
            <Card className="border-dark col-md-4 m-2">
                <CardHeader><h2>{club.name}</h2></CardHeader>
                <CardImg src={club.logo} className="img-fluid"></CardImg>
                <CardFooter>
                    <button className="btn btn-primary btn-lg mt-3" type="button">Explore</button>
                </CardFooter> 
            </Card>
        );
     });
    return(printClubs);
}

class Home extends Component{
    render(){
        return(
            <div className="row jumbotron d-flex justify-content-center background_img">
                <RenderClubs clubNames = {allClubs}/>
            </div>
        );
    }
}

export default Home;