import React, {Component} from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            iserInput:'',
            items: [],
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

    // création de l'input qui va mettre à jour le texte écrit
    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    // ajoute les choses à faire
    addTodo(event) {
        // évite de reload la page pour un missclic
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    // supprime les chose écrites
    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    // montre les choses à faire
    renderTodos() {
        return this.state.items.map((item) =>{
            return (
                <div key={item}>
                    {item} <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );

        });
    }

    render() {
        return (
            <div>
                <h1>Compteur : {this.state.count}</h1>
                <button onClick={() => this.lessOne()}>-1</button>
                <button onClick={() => this.addOne()}>+1</button>
                <br></br>
                <br></br>
                <br></br>
                <form>
                    <input value={this.state.userInput} type="text" placeholder="Ajout d'une tâche" onChange={this.onChange.bind(this)}></input>
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div>
                    {this.renderTodos()} 
                </div>
            </div>
        );
    }
}

export default Welcome;