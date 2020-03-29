import React from 'react'
import classes from './AddProduct.module.css';
import { PRODUCTPAGE_LINK } from '../Utils/Links'


class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }
    selectImage = (e) => {
        e.preventDefault()
        const loder = new FileReader()
        let file = e.target.files[0]
        loder.onloadend = () => {
            this.setState({ file: file, image: loder.result })
        }

        loder.readAsDataURL(file)


    }
    onUploadImageClicked = () => {

    }
    onFormSubmit = (e) => {
        e.preventDefault()
        const productData = {
            productName: e.target.pdtName.value,
            decription: e.target.dec.value,
            category: e.target.category.value,
            expirydate: e.target.expDate.value,
            stock: e.target.stock.value
        }
        console.log(productData)
        alert("Your Product Added Successfully")
        const path = PRODUCTPAGE_LINK
        // const path = `products`;
        this.props.history.push(path);
    }
    render() {
        return (
            <div className={classes.addNewProductSection}>
                <div className={classes.addProductWrapper}>
                    <div className={classes.addProductHead}> <h3>Add Product</h3></div>
                    <form action="" onSubmit={this.onFormSubmit}>
                        <div className={classes.addProductContainer}>

                            <div className={classes.infoFIllSection}>
                                <div className={classes.inputFill}>
                                    <label>Product Name</label>
                                    <input type="text" required name="pdtName" />
                                </div>
                                <div className={classes.inputFill} >
                                    <label>Discription</label>
                                    <textarea id="" cols="30" rows="10" required name="dec"></textarea>
                                </div>
                                <div className={classes.inputFill}>
                                    <p>Accounts</p>
                                    <select className={classes.userSelectMenu} name="category">
                                        <option value="Select Categories">Select Categories</option>
                                        <option value="New Arival">New Arival</option>
                                        <option value="Most Popular">Most Popular</option>
                                        <option value="Trainding">Trainding</option>

                                    </select>
                                </div>
                                <div className={classes.inputFill}>
                                    <div className={classes.dateInputs}>
                                        <div className={classes.dateUnitWrapper}>
                                            <label>Expire Date</label>
                                            <input type="date" required name="expDate" />
                                        </div>
                                        <div className={classes.dateUnitWrapper}>
                                            <label>Units in Stock</label>
                                            <input type="text" required name="stock" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={classes.uploadImageContainer}>
                                <div className={classes.uploadImage}>
                                    <input type="file" onChange={this.selectImage} value="" name="pdtImage" className={classes.addImage} />
                                    <img src={this.state.image} alt="" />
                                </div>
                                <div className={classes.uploadImageBtn}>
                                    <button>Upload Product Image</button>
                                </div>

                            </div>
                        </div>
                        <div className={classes.addProductButton}>
                            <button onSubmit={this.onFormSubmit}>Add Product Now</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddProduct;