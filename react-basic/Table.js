const { Component } = require("react");

const TableHeader =() =>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableBody =(props) =>{
    const {charatersData, removeCharacter} = props

    const rows = charatersData.map((character,index) => {
        return(<tr key={index}>
            <td>{character.name}</td>
            <td>{character.job}</td>
            <td>
                <button onClick={()=>removeCharacter(index)}>Delete</button>
            </td>
            </tr>);
    })
    return(
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {
    render(){
        const {charatersData, removeCharacter} = this.props;
        return(
            <table>
                <TableBody removeCharacter={removeCharacter} charatersData={charatersData} />
                <TableHeader />
            </table>
        )
    }
}

export default Table;