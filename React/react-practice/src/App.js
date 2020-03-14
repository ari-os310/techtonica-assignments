import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const maxCharacters = 100;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'user1',
      message: '',
      chirp: [] 
    };
  }

  handleMessageInput = event => {
    this.setState({ 
      message: event.target.value 
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.message.length <= maxCharacters) {
    let newTweet = {
      message: this.state.message,
      username: this.state.username,
      timestamp: new Date()
    }
    this.setState({
      tweets: this.state.tweets.concat([newTweet]),
      message: ''
    })
  }
}


  render() {
    const 
      message = this.state.message,
      // maxCharacters = 100,
      currentCharacterCount = message.length,
      overCharacterLimit = maxCharacters - currentCharacterCount; 

    return (
      <div>
        <h1>Fake Twitter</h1>

        <label for="entryform">Tweet Tweet Birdy</label>
        <form name="entryform" id="entry-form" >
          <select name="usernames" id="usernames">
            <option value="user1">ARRM</option>
            <option value="user2">XELA</option>
            <option value="user3">RJAR</option>
            <option value="user4">LilAK</option>
            <option value="user5">RRMM</option>
          </select>
          <br/>
          
          <textarea 
            value={message} 
            onChange={this.handleMessageInput}
            // onSubmit = {this.handleSubmit}
            >
          </textarea>
          
          <br />
          <span id = "character">
            Character Count: {overCharacterLimit}
            {currentCharacterCount <= maxCharacters && currentCharacterCount >= 0
              ? ' Dale Gas!'
              : <span style={{color: "red"}}> Over Character Limit!</span>
              }
          </span>
          <br/>
          
          <input 
            type="submit" 
            value="Submit" 
            onClick = {this.handleSubmit}>
          </input>

          <ul>
            {/* {submittedMessage} */}
          </ul>
          {/* document.getElementById(''); */}
        
        </form>
      </div>
    );
  }
}

export default App;

