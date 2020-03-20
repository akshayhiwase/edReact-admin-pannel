import React from 'react';
import classes from './Accounts.module.css';
import getApiResponce from '../Utils/Utils';


class Accounts extends React.Component {

    state = {
        accountUser: [],
        value: "",
        account: {},
        accountPic: ''

    }

    componentWillMount = () => {
        getApiResponce().then((res) => {
            this.setState({ accountUser: Object.values(res.accountsPage) })
        }).catch(err => console.log(err))

    }
    onAccountNameChange = (e) => {
        const name = e.target.value;
        this.setState({
            value: e.target.value,
            account: this.state.accountUser[parseInt(name)],
            profilePic: this.state.accountUser[parseInt(name)].profilePic,
        })
    }
    onUserEdited = (value) => {
        this.setState({
            account: value
        })
        console.log(value)
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        alert("Your Profile Updated Succesfully")
        const updatedProfileData = {
            name: e.target.AccName.value,
            email: e.target.AccEmail.value,
            password: e.target.pwd.value,
            rePassword: e.target.rePwd.value,
            phone: e.target.num.value
        }
        console.log(updatedProfileData)
        localStorage.setItem("userData", JSON.stringify(updatedProfileData))

    }

    render() {


        return (
            <div className={classes.accountsSection}>
                <div className={classes.accountSelectSection}>
                    <div className={classes.headElement}>
                        <h3>List of Accounts</h3>
                    </div>
                    <div className={classes.accountsElements}>
                        <h3>Accounts</h3>
                        <select className={classes.userSelectMenu} onChange={this.onAccountNameChange}>
                            <option value="0">Select Account</option>
                            <option value="0">Admin</option>
                            <option value="1">Editor</option>
                            <option value="2">Murchant</option>
                            <option value="3">Customer</option>
                        </select>
                    </div>
                </div>
                <div className={classes.createAccountSection}>
                    <div className={classes.photoUploadSection}>
                        <div className={classes.headWrapper}>
                            <h3>Change Avatar</h3>
                        </div>
                        <div className={classes.profileImageSection}>
                            <div className={classes.imageWrapper}>
                                <img src={this.state.profilePic === '' ? "https://www.osea-asia.com/wp-content/uploads/dummy-icon-male.jpg" : this.state.profilePic} alt="" className={classes.profileImage} />
                            </div>
                            <div className={classes.trashProfileImageWrapper}>
                                <i class="fas fa-trash-alt"></i>
                            </div>

                        </div>
                        <div className={classes.uploadPicBtnWrapper}>
                            <button>Upload a New photo</button>
                        </div>

                    </div>
                    <div className={classes.informationAddSection}>
                        <div className={classes.formhead}>
                            <h3>Account Settings</h3>
                        </div>
                        <div className={classes.accountFormContainer}>


                            <form action="" className={classes.accountForm} onSubmit={this.onFormSubmit}>
                                <div className={classes.inputInfoFill}>
                                    <label htmlFor="">Account Name</label>
                                    <input type="text" name="AccName" value={this.state.account.name} onChange={(e) => this.onUserEdited(e.target.value)} />
                                </div>
                                <div className={classes.inputInfoFill}>
                                    <label htmlFor="">Account Email</label>
                                    <input type="email" name="AccEmail" value={this.state.account.email} onChange={(e) => this.onUserEdited(e.target.value)} />
                                </div>
                                <div className={classes.inputInfoFill}>
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="pwd" value={this.state.account.password} onChange={(e) => this.onUserEdited(e.target.value)} />
                                </div>
                                <div className={classes.inputInfoFill}>
                                    <label htmlFor="">Re-enter Password</label>
                                    <input type="password" name="rePwd" />
                                </div>
                                <div className={classes.inputInfoFill}>
                                    <label htmlFor="">Phone</label>
                                    <input type="number" name="num" value={this.state.account.phone} onChange={(e) => this.onUserEdited(e.target.value)} />
                                </div>
                                <div className={classes.updateProfileBtnWrapper}>
                                    <button onSubmit={this.onFormSubmit}>Update Your Profile</button>
                                </div>
                                <div className={classes.deleteProfileBtnWrapper}>
                                    <button>Delete Your Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accounts;