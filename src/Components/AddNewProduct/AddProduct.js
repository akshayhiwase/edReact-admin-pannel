import React from 'react'
import classes from './AddProduct.module.css';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onAddProductClick = () => {
        alert("Your Product Added Successfully")
        const path = `products`;
        this.props.history.push(path);
    }
    render() {
        return (
            <div className={classes.addNewProductSection}>
                <div className={classes.addProductWrapper}>
                    <div className={classes.addProductHead}> <h3>Add Product</h3></div>
                    <div className={classes.addProductContainer}>
                        <div className={classes.infoFIllSection}>
                            <div className={classes.inputFill}>
                                <label>Product Name</label>
                                <input type="text" required />
                            </div>
                            <div className={classes.inputFill} >
                                <label>Discription</label>
                                <textarea name="" id="" cols="30" rows="10" required></textarea>
                            </div>
                            <div className={classes.inputFill}>
                                <p>Accounts</p>
                                <select className={classes.userSelectMenu}>
                                    <option value="0">Select Categories</option>
                                    <option value="1">New Arival</option>
                                    <option value="2">Most Popular</option>
                                    <option value="3">Trainding</option>

                                </select>
                            </div>
                            <div className={classes.inputFill}>
                                <div className={classes.dateInputs}>
                                    <div className={classes.dateUnitWrapper}>
                                        <label>Expire Date</label>
                                        <input type="date" required />
                                    </div>
                                    <div className={classes.dateUnitWrapper}>
                                        <label>Units in Stock</label>
                                        <input type="text" required />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={classes.uploadImageContainer}>
                            <div className={classes.uploadImage}>
                                <img src="https://www.nicepng.com/png/detail/108-1084516_upload-to-cloud-blue-button-upload-cloud-icon.png" alt="" />
                            </div>
                            <div className={classes.uploadImageBtn}>
                                <button>Upload Product Image</button>
                            </div>

                        </div>
                    </div>
                    <div className={classes.addProductButton}>
                        <button onClick={this.onAddProductClick}>Add Product Now</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddProduct;