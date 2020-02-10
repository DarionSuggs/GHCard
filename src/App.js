import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

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
        <button className="ui button" onClick={this.handleToggle}>
          Toggle User
        </button>
        <Card>
          <Card.Content>
            {this.state.active && (
              <div>
                <img
                  className="img"
                  src={this.state.user.avatar_url}
                  alt="My Profile"
                />
                <Card.Description>{this.state.user.name}</Card.Description>
                <Card.Description>
                  Followers: {this.state.user.followers}
                  <hr></hr>
                </Card.Description>
                <Card.Description>
                  <Icon name="location arrow" /> Location:{" "}
                  {this.state.user.location}
                </Card.Description>
              </div>
            )}
          </Card.Content>
        </Card>
      </>
    );
  }
}

export default App;
