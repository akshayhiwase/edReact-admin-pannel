import React from 'react';
import classes from './Login.module.css';
import getApiResponce from '../Utils/Utils';




class Login extends React.Component {



    state = {
        accountUser: []
    }


    componentWillMount = () => {
        getApiResponce().then((res) => {
            this.setState({ accountUser: Object.values(res.accountsPage) })
            localStorage.setItem("AccountUser", JSON.stringify(this.state.accountUser))
            console.log(this.state.accountUser)
        }).catch(err => console.log(err))
    }

    onUserLogin = (e) => {
        e.preventDefault();
        const loginUser = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        getApiResponce().then((res) => {
            this.setState({ accountUser: Object.values(res.accountsPage) })
            const LoginUser = Object.values(res.accountsPage).filter((user) => {
                return user.email === loginUser.username && user.password === loginUser.password
            })

            console.log(LoginUser);

            if (LoginUser[0].email === loginUser.username && LoginUser[0].password === loginUser.password) {

                alert("Login Successful")
                const path = ``;
                this.props.history.push(path);
            } else {
                alert("You Are Not Authorized To Login")
                e.target.reset()

            }

            localStorage.setItem("AccountUser", JSON.stringify(this.state.accountUser))
            console.log(this.state.accountUser)
        }).catch(err => console.log(err))






    }

    render() {


        return (
            <div className={classes.loginSection}>
                <div className={classes.loginContaint}>
                    <div className={classes.infoTextDiv}>
                        <h3>Welcome to Dashboard, Login</h3>
                    </div>
                    <form action="" onSubmit={this.onUserLogin}>
                        <div className={classes.inputFieldSection}>
                            <label htmlFor="">Username</label>
                            <input type="text" name="username" />
                        </div>
                        <div className={classes.inputFieldSection}>
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className={classes.inputFieldSection}>
                            <button className={classes.loginBtn}>Login</button>
                        </div>
                        <div className={classes.inputFieldSection}>
                            <button className={classes.loginBtn} onSubmit={this.onUserLogin}>Forgot Your Password?</button>
                        </div>
                    </form>

                </div>


            </div>
        )
    }
}

export default Login;