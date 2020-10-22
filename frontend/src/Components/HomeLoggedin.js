import React, {Component} from 'react';
import HeaderLoggedin from './HeaderLoggedin';
import Home from './Home';

class HomeLoggedin extends Component {

        render(){
            return(

                <div>
                    <HeaderLoggedin />
                    <Home />
                </div>

            );
        }
}

export default HomeLoggedin;