import React from 'react';
import classes from './Login.module.css';


const Login = () => {
    return (
        <div className={classes.loginSection}>
            <div className={classes.loginContaint}>
                <div className={classes.infoTextDiv}>
                    <h3>Welcome to Dashboard, Login</h3>
                </div>
                <form action="">
                    <div className={classes.inputFieldSection}>
                        <label htmlFor="">Username</label>
                        <input type="text" />
                    </div>
                    <div className={classes.inputFieldSection}>
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <div className={classes.inputFieldSection}>
                        <button className={classes.loginBtn}>Login</button>
                    </div>
                    <div className={classes.inputFieldSection}>
                        <button className={classes.loginBtn}>Forgot Your Password?</button>
                    </div>
                </form>

            </div>


        </div>
    )
}

export default Login;