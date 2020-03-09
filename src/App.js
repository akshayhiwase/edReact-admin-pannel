import React from 'react';
import classes from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './Components/LoginPage/Login';
import AccountPage from './Components/AccountsPage/Accounts';
import ProductPage from './Components/ProductsPage/Products';
import Dashboard from './Components/Dashboard/Dashborad'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <div className={classes.mainContainer}>
          <Navbar />
          <Switch>
            <Route path="/products" component={ProductPage} />
            <Route path="/accounts" component={AccountPage} />
            <Route path="/loginpage" component={LoginPage} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
