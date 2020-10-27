import React, {Component} from 'react';
import {Card,CardImg,CardHeader,CardFooter} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import  allClubs from '../Shared/AllClubs';

class RenderClubs extends Component{
    constructor(props) {
        super(props);

        this.state = {
            redirectVar: false,
            id: '',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            redirectVar: true,
            id: event.target.id,
        });
    }

    render() {
        let printClubs = this.props.clubNames.map((club) =>{
            return(
                <Card className="border-dark col-sm-4 m-2">
                    <CardHeader style={{backgroundColor: "white"}}><h2>{club.name}</h2></CardHeader>
                    <CardImg src={club.logo} className="img-fluid"></CardImg>
                    <CardFooter style={{backgroundColor: "white"}}>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary btn-lg mt-3" id={club.nickName} onClick={this.handleClick} type="button">Explore</button>
                        </div>
                    </CardFooter> 
                </Card>
            );
        });
        if(this.state.redirectVar) {
            return(
                <Redirect to={`/home/${this.state.id}`} />
            );
        } else {
            return(printClubs);
        }
    }
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