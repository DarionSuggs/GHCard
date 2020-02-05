import React, { Component } from "react";

import "./App.css";

const gitHubAPI = "https://api.github.com/users/darionsuggs";

class App extends Component {
  state = {
    user: {},
    active: false
  };

  handleToggle = event => {
    if (this.state.active === false) {
      fetch(gitHubAPI)
        .then(response => response.json())
        .then(responseBody => {
          console.log(responseBody);
          this.setState({ user: responseBody, active: true });
        });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    return (
      <>
        <button class="btn" onClick={this.handleToggle}>
          Toggle User
        </button>
        {this.state.active && (
          <>
            <img src={this.state.user.avatar_url} alt="My Profile" />
            <h1>{this.state.user.name}</h1>
            <p>Blog: {this.state.user.blog}</p>
            <p>Location: {this.state.user.location}</p>
          </>
        )}
      </>
    );
  }
}

export default App;
