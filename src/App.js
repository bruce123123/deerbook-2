import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Friends from './components/Friends';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Casey Harding",
        username: "CRHarding",
        image: "https://pyxis.nymag.com/v1/imgs/5e4/dfd/c59573793cc957a78d232f82d3832af173-17-thor.rsquare.w700.jpg",
        friendList: ["Leo"]
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }
  componentDidMount = async () => {
    const friendOne = await axios.get("https://randomuser.me/api/");
    const friendTwo = await axios.get("https://randomuser.me/api/");
    const friendThree = await axios.get("https://randomuser.me/api/");
    const friendFour = await axios.get("https://randomuser.me/api/");
    const friendFive = await axios.get("https://randomuser.me/api/");
    const friends = [
      friendOne.data.results[0],
      friendTwo.data.results[0],
      friendThree.data.results[0],
      friendFour.data.results[0],
      friendFive.data.results[0]
    ];
    this.setState({
      potentialFriends: friends,
      apiDataLoaded: true
    })
  }
  render() {
    return (
      <div className="App">
        <h1>CaseyBook</h1>
        <Profile user={this.state.user} />
        <Friends potentialFriends={this.state.potentialFriends} />
      </div>
    );
  }
}
export default App;