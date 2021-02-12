import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Friends from './components/Friends';
import {BrowserRouter as Router} from 'react-router-dom';


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
        <nav>
          <Link to="/">Profile</Link>
          <Link to="/users">Users</Link>

          </nav>
        <h1>CaseyBook</h1>
        <Route path="/" render={() => (
        <Profile user={this.state.user} />
        )} />
        <Route path="/users" render={() => (
        <Friends potentialFriends={this.state.potentialFriends} />
        )} />
      </div>
    );
  }
}
export default App;