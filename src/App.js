import React, { Component } from 'react';
import './css/App.css';
import NavBar from './NavBar'
import Table from './Table'
import PageLoader from './PageLoader'

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <div className="main">
        <Table></Table>
        </div>
      </div>
    );
  }
}

export default App;
