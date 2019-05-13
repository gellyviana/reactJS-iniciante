import React, {Component} from 'react'
import Table from './Table';
import Form from './Form';

class App extends Component{
    state = {
        characters:[]
    };
    removeCharacter = index => {
        const { characters } = this.state;
        
        this.setState({
            characters: characters.filter((character,i)=> {
                return i !== index
            })
        });
    }
    handleSubmit = character => {
        this.setState({characters:[...this.state.characters,character]})
    }
    render(){
        
        return (
            <div className = "container">
            <h1>React Tutorial</h1>
            <p>Add a character with a name and job to the table</p>
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App