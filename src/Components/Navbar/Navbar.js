import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={classes.navbarContainer}>

            <div className={classes.mainHead}>
                <Link to="/">
                    <h1 className={classes.adminLogo}>Product Admin</h1>
                </Link>
            </div>

            <div className={classes.navElementWrapper}>
                <div className={classes.navElement}>
                    <Link to="/" >
                        <i className="fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </Link>
                </div>

                <div className={classes.navElement}>
                    <Link to="/products" >
                        <i className="fas fa-shopping-cart"></i>
                        <p>Products</p>
                    </Link>
                </div>

                <div className={classes.navElement}>
                    <Link to="/accounts">
                        <i className="fas fa-user"></i>
                        <p>Accounts</p>
                    </Link>
                </div>
            </div>
            <div className={classes.loginText}>
                <Link to="/loginpage">
                    <h1 className={classes.loginLogo}>Admin/Logout</h1>
                </Link>
            </div>
            <div className={classes.dropdown}>
                <button><i className="fas fa-bars tm-nav-icon"></i></button>
                <div className={classes.dropdownContent}>
                    <Link to="/" >
                        <i className="fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </Link>
                    <Link to="/products" >
                        <i className="fas fa-shopping-cart"></i>
                        <p>Products</p>
                    </Link>
                    <Link to="/accounts">
                        <i className="fas fa-user"></i>
                        <p>Accounts</p>
                    </Link>
                    <Link to="/loginpage">
                        <p>Admin/Logout</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default Navbar;