import React from 'react';
import classes from './Products.module.css';
import Axios from 'axios';
import { ADDNEWPRODUCT_LINK } from '../Utils/Links';


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            deletList: [],
            selectedList: [],
            isChecked: false,
        }

        this.mychackInput = React.createRef()
    }
    componentDidMount = () => {
        Axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
            .then((responce) => {

                this.setState({
                    categories: [...responce.data.productsPage.categories],
                    products: [...responce.data.productsPage.products]
                })
            }).catch(err => console.log(err))
    }
    onAddNewProductClick = () => {
        const path = ADDNEWPRODUCT_LINK;
        this.props.history.push(path);
    }
    handleClickOncheckbox = (list) => {
        this.state.selectedList.push(list)
        this.setState({
            deletList: list
        })
    }
    hanndleDeleteList = (name) => {
        const filterList = this.state.products.filter(list => list !== this.state.deletList);
        this.setState({
            products: [...filterList],
            deletList: ""
        })
        console.log(name)
    }
    handleSelectedListDelet = () => {
        const ids = new Set(this.state.selectedList.map(({ name }) => name))
        this.state.products = this.state.products.filter(({ name }) => !ids.has(name))
        this.setState({
            products: this.state.products,
            isChecked: false
        })
        this.mychackInput = false
    }

    onListSelect = () => {
        return (classes.selectIcon)
    }
    render() {
        const productsInfo = this.state.products.map((list) => {
            return (
                <div className={classes.infoList}>
                    <tr className={classes.infoTr}>
                        <td><div className={classes.selectList}><label className={classes.container}><input type="checkbox" ref={this.mychackInput}
                        /><span onClick={() => this.handleClickOncheckbox(list)} className={classes.checkmark}></span></label></div></td>
                        <td>{list.name}</td>
                        <td>{list.unitSold}</td>
                        <td>{list.stock}</td>
                        <td>{list.expireDate}</td>
                        <td><div className={classes.deletIcon} onClick={() => this.hanndleDeleteList(list.name)}><i className="far fa-trash-alt"></i></div></td>
                    </tr>
                </div>
            )
        })
        const categoriesInfo = this.state.categories.map((list) => {
            return (
                <div className={classes.categoriList}>
                    <p>{list}</p>
                    <div className={classes.deletIcon}><i className="far fa-trash-alt"></i></div>

                </div>
            )
        })
        return (

            <div className={classes.productsSection}>

                <div className={classes.productInfoWrapper}>
                    <div className={classes.productInfoDetails}>
                        <div className={classes.infoHead}>
                            <thead>
                                <td></td>
                                <td>PRODUCT NAME</td>
                                <td>UNIT SOLD</td>
                                <td>IN STOCK</td>
                                <td>EXPIRE DATE</td>
                                <td></td>

                            </thead>
                        </div>

                        {productsInfo}
                    </div>
                    <div className={classes.productBtnSection}><button onClick={this.onAddNewProductClick}>Add New Product</button></div>
                    <div className={classes.productBtnSection}><button onClick={this.handleSelectedListDelet}>Delete Selected Product</button></div>
                </div>
                <div className={classes.productCategoriesWrapper}>
                    <div className={classes.categoriesHead}>
                        <h3>Product Categories</h3>
                    </div>
                    <div className={classes.categoriListWrapper}>
                        {categoriesInfo}
                    </div>
                    <div className={classes.categoryAddBtn}><button>Add New Category</button></div>
                </div>


            </div>
        );
    }
}

export default Products;