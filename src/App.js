import React from 'react';
import classes from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Components/LoginPage/Login';
import AccountPage from './Components/AccountsPage/Accounts';
import ProductPage from './Components/ProductsPage/Products';
import Dashboard from './Components/Dashboard/Dashborad'
import Footer from './Components/Footer/Footer';
import AddProduct from './Components/AddNewProduct/AddProduct';
import { connect } from 'react-redux'
import { PRODUCTPAGE_LINK, ADDNEWPRODUCT_LINK, ACCOUNTPAGE_LINK, LOGINPAGE_LINK } from './Components/Utils/Links';

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
            <Route path={PRODUCTPAGE_LINK} component={ProductPage} />
            <Route path={ADDNEWPRODUCT_LINK} component={AddProduct} />
            <Route path={ACCOUNTPAGE_LINK} component={AccountPage} />
            <Route path={LOGINPAGE_LINK} component={LoginPage} />
            <Route path="/" component={Dashboard} />
            <Route path="/" render={(routeParams) => this.state.userState ? <Dashboard params={routeParams} /> : <Redirect to={LOGINPAGE_LINK} />} />

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapPropsToGlobalState = (state) => {
  return state;
}

export default connect(mapPropsToGlobalState)(App);
