import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  handleMessageInput = event => {
    this.setState({ 
      message: event.target.value 
    });
  };

  render() {
    const 
      message = this.state.message,
      maxCharacters = 100,
      currentCharacterCount = message.length,
      overCharacterLimit = maxCharacters - currentCharacterCount; {
      }

      date (){
        
      }

    return (
      <div>
        <h1>Fake Twitter</h1>

        <label for="entryform">Tweet Tweet Birdy</label>
        <form name="entryform" id="entry-form">
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
            onChange={this.handleMessageInput}>
          </textarea>
          
          <br />
          <span id = "character">
            Character Count: {overCharacterLimit}
            {currentCharacterCount <= maxCharacters && currentCharacterCount >= 0
              ? ' Dale Gas!'
              : <span style={{color: "red"}}> ' Over Character Limit!'</span>
              }
          </span>
          <br/>
          
          <input type="submit" value="Submit"></input>

          <ul>
            {/* figuring out how to add and display lists in react */}
          </ul>



        </form>
      </div>
    );
  }
}

export default App;
