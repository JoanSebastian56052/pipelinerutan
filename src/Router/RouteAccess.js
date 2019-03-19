import React, {Component} from 'react';
import RouteAdmin from './Users/RouteAdmin.js'
import RouteAsessor from './Users/RouteAsessor.js'
import RouteUser from './Users/RouteUser.js'
import RouteUnlogin from './Users/RouteUnlogin.js'

class RouteAccess extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        this.getRoute()
    }

    getRoute() {
        
    }

    render() {
        return(
            <div>

            </div>
        );
    }

}

export default RouteAccess;