// Props 
// to send a data
//  the props passed to a class component are available as (this.props)

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
