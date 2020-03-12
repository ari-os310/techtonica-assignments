import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { users : [] }

  componentDidMount(){
    fetch('/users')
      .then( res => res.json())
      .then( users => this.setState({ users }));
  }
  
  render() {
    return (
      <div className="App">
        <h1> Animals </h1>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.animal}</li>
            )}
        </ul>
      </div>
    );

  }
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */