import React, { Component } from "react";
import "./App.css";

const gitHubAPI = "https://api.github.com/users/darionsuggs";

class App extends Component {
  state = {
    user: {},
    active: false
  };

  handleToggle = event => {
    fetch(gitHubAPI)
      .then(response => response.json())
      .then(responseBody => {
        console.log(responseBody);
        this.setState({ user: responseBody });
      });
  };

  render() {
    return (
      <React.Fragment>
        <button class="btn" onClick={this.handleToggle}>
          Toggle User
        </button>
        <img src={this.state.user.avatar_url} alt="My Profile" />
        <h1>{this.state.user.login}</h1>
        <p>Blog: {this.state.user.blog}</p>
        <p>Location: {this.state.user.location}</p>
      </React.Fragment>
    );
  }
}

export default App;
