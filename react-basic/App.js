import { Component } from "react";
import Table from "./Table";

class App extends Component{

    state ={
        character : [
            {
                name:"gopal",
                job: "Business"
            },
            {
                name:"Kanna",
                job:"Freelaner"
            },
            {
                name:"John",
                job:"Software"
            },
        ]
    }

    removeCharacter = (index) => {
        const { character } = this.state
        let filtered = character.filter((character,i) =>{
            return i!== index
        })

        this.setState({character:filtered});
    }

    render(){
        const {character} = this.state
      return(
        <div className='App'>
          <h1>Table</h1>
          <Table removeCharacter = {this.removeCharacter} charatersData = {character} />
        </div>
      )
    }
}

export default App;