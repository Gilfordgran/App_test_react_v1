import React, {Component} from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <h1>Bonjour {this.props.name}</h1>
        );
    }
}

export default Welcome;