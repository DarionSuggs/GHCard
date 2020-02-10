// import React, { Component } from "react";
// import { Card, Icon, } from "semantic-ui-react";

// import "./App.css";

// const gitHubAPI = "https://api.github.com/users/darionsuggs";

// class App extends Component {
//   state = {
//     user: {},
//     active: false
//   };

//   handleToggle = event => {
//     if (this.state.active === false) {
//       fetch(gitHubAPI)
//         .then(response => response.json())
//         .then(responseBody => {
//           console.log(responseBody);
//           this.setState({ user: responseBody, active: true });
//         });
//     } else {
//       this.setState({ active: false });
//     }
//   };

//   render() {
//     return (
//       <>
//         <button class="ui button" onClick={this.handleToggle}>
//           Toggle User
//         </button>
//         <Card>
//           <Card.Content>
//             {this.state.active && (
//               <div>
//                 <img
//                   className="img"
//                   src={this.state.user.avatar_url}
//                   alt="My Profile"
//                 />
//                 <Card.Description>{this.state.user.name}</Card.Description>
//                 <Card.Description>
//                   Followers: {this.state.user.followers}
//                   <hr></hr>
//                 </Card.Description>
//                 <Card.Description>
//                   <Icon name="location arrow" /> Location:{" "}
//                   {this.state.user.location}
//                 </Card.Description>
//               </div>
//             )}
//           </Card.Content>
//         </Card>
//       </>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./App.css";

// Variables Section
const gitHubAPI = "https://api.github.com/users/darionsuggs";

// Class component
class App extends Component {
  state = {
    user: {},
    active: false
  };
  // General method on App
  handleToggle = event => {
    if (this.state.active === false) {
      fetch(gitHubAPI)
        .then(response => response.json())
        .then(responseBody => {
          // console.log(responseBody);
          this.setState({ user: responseBody, active: true });
        });
    } else {
      this.setState({ active: false });
    }
  };

  // Lifecycle method on App
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleToggle}>Toggle User</Button>
        {this.state.active && (
          <React.Fragment>
            <Card>
              <Image
                src={this.state.user.avatar_url}
                alt="User Profile Pic"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{this.state.user.name}</Card.Header>
                <Card.Description>
                  Lives in: {this.state.user.location}
                </Card.Description>
                <Card.Description>
                  Name: {this.state.user.name}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="user" />
                Followers: {this.state.user.followers}
              </Card.Content>
            </Card>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
