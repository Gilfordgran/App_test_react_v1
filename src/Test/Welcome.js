import React, {Component} from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // ajoute 1
    addOne() {
        this.setState({
            count: this.state.count + 1
        });
    }

    // enlève 1
    lessOne() {
        this.setState({
            count: this.state.count -1
        });
    }

    render() {
        return (
            <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>Compteur : {this.state.count}</p>
            <button onClick={() => this.addOne()}>+1</button>
            <button onClick={() => this.lessOne()}>-1</button>
            </div>
        );
    }
}

export default Welcome;