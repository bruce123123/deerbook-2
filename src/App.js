import React, { Component } from 'react';
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
      apiDataLoaded: true,
      potentialFriends: []
    },
    this.componentDidMount = async () => {
      const friend1 = await axios.get("https//randomuser.me/api/");
      const friend2 = await axios.get("https//randomuser.me/api/");
      const friend3 = await axios.get("https//randomuser.me/api/");
      const friend4 = await axios.get("https//randomuser.me/api/");
      const friend5 = await axios.get("https//randomuser.me/api/");
      console.log(friend.data.results[0]);
      const friends= [
        friend1.data.results[0],
        friend2.data.results[0],
        friend3.data.results[0],
        friend4.data.results[0],
        friend5.data.results[0],
      ]
      this.setState({
        potentialFriends: friends
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h1>CaseyBook</h1>
        <Profile user={this.state.user} />
        <Friends potentialFriends={this.state.potentialFriends}/>
      </div>
    );
  }
}
export default App;