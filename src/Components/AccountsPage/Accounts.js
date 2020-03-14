import React from 'react';
import classes from './Accounts.module.css';


const Accounts = () => {
    return (
        <div className={classes.accountsSection}>
            <div className={classes.accountSelectSection}>
                <div className={classes.headElement}>
                    <h3>List of Accounts</h3>
                </div>
                <div className={classes.accountsElements}>
                    <h3>Accounts</h3>
                    <select className={classes.userSelectMenu}>
                        <option value="0">Select Account</option>
                        <option value="1">Admin</option>
                        <option value="2">Editor</option>
                        <option value="3">Murchant</option>
                        <option value="4">Customer</option>
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
                            <img src="https://timesofindia.indiatimes.com/thumb/msid-71837037,width-800,height-600,resizemode-4/71837037.jpg" alt="" className={classes.profileImage} />
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


                        <form action="" className={classes.accountForm}>
                            <div className={classes.inputInfoFill}>
                                <label htmlFor="">Account Name</label>
                                <input type="text" />
                            </div>
                            <div className={classes.inputInfoFill}>
                                <label htmlFor="">Account Email</label>
                                <input type="text" />
                            </div>
                            <div className={classes.inputInfoFill}>
                                <label htmlFor="">Password</label>
                                <input type="text" />
                            </div>
                            <div className={classes.inputInfoFill}>
                                <label htmlFor="">Re-enter Password</label>
                                <input type="text" />
                            </div>
                            <div className={classes.inputInfoFill}>
                                <label htmlFor="">Phone</label>
                                <input type="text" />
                            </div>
                            <div className={classes.updateProfileBtnWrapper}>
                                <button>Update Your Profile</button>
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

export default Accounts;