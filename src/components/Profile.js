import React from "react";
import Contactus from "../components/Contactus";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("constructor");
  }

  async componentDidMount() {
    // const response = await fetch("https://api.github.com/users/vijayakumardpr");
    // const data = await response.json();
    // console.log(data);
    // this.setState({userInfo:data});
    console.log("mount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("willunmount");
  }

  render() {
    //fetch("https://api.github.com/users/vijayakumardpr").then(res => res.json()).then(data => this.setState({userInfo:data}))
    console.log("render");
    return (
      <div>
        {console.log("DOM updates")}
        <div>Profile</div>
        {/* <img src={this.state.userInfo.avatar_url}/> 
        <h3>Name:{this.state.userInfo.name}</h3>
        <h4>Location:{this.state.userInfo.location}</h4> */}
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          inc
        </button>
      </div>
    );
  }
}

export default Profile;
