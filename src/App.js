import logo from './logo.svg';

import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    user: {
      name: "Bruce Hay",
      username: "bhay",
      image: "",
      firendList: []
    },
    apiDataLoaded: false,
    potentialFriends: []
  }
}


  Render() {
  return (
    <div className="App">
      <h1>Bruce Book</h1>




    </div>
  );
  }
 }

export default App;
