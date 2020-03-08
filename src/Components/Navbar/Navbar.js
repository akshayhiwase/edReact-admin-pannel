import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.mainHead}>
                <h1 className={classes.adminLogo}>Product Admin</h1>
            </div>
            <div className={classes.navElement}>
                <i className="fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
            </div>
            <div className={classes.navElement}>
                <i className="fas fa-file-alt"></i>
                <p>Reports^</p>
            </div>
            <div className={classes.navElement}>
                <i className="fas fa-shopping-cart"></i>
                <p>Products</p>
            </div>
            <div className={classes.navElement}>
                <i className="fas fa-user"></i>
                <p>Accounts</p>
            </div>
            <div className={classes.navElement}>
                <i className="fas fa-cog"></i>
                <p>Setting^</p>
            </div>
            <div className={classes.loginText}>
                <h1 className={classes.loginLogo}>Admin/Logout</h1>
            </div>


        </div>
    )
}
export default Navbar;