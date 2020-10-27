import React, {Component} from 'react';

class IdClub extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.club.name);
        return(
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h3>Welcome to {this.props.club.name}</h3>
                </div>
            </div>
        );
    }
}

export default IdClub;