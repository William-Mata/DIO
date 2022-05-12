import './App.css';
import { Component } from 'react';
// import ReactDOM from 'react-dom';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      copo: 'agua'
    }
  }
  
  componentDidMount(){
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }


  render() {

    const alterarCopo = () =>{
      this.setState({
        copo: 'refrigerante'
      })
    }
  

    const { clock, copo } = this.state;
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={alterarCopo}><h3>{copo}</h3></button>
      </div>
    )
  }

}


export default App;
