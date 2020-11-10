import React, {Component} from 'react'
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: "USR1"
  };

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  };
  
  render() {
    return(
    <div className="App">
      <h1>TASK1</h1>
      <UserInput name={this.state.username} changed = {this.changeNameHandler.bind(this)}/>
      <UserOutput data1={this.state.username} data2={this.state.username} />
      <UserOutput data1="P1" data2="P2" />
    </div>
    );
  }
}

export default App;
