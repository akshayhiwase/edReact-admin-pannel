import React from 'react';
import classes from './App.module.css';
import Navbar from './Components/Navbar/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={classes.mainContainer}>
        <Navbar />

      </div>
    );
  }
}

export default App;
