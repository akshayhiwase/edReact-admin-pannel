import React from 'react';
import classes from './Products.module.css';
import Axios from 'axios';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        }
    }
    componentDidMount = () => {
        Axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
            .then((responce) => {
                console.log(responce.data.productsPage)
                this.setState({
                    categories: [...responce.data.productsPage.categories],
                    products: [...responce.data.productsPage.products]
                })
            }).catch(err => console.log(err))
    }
    render() {
        const productsInfo = this.state.products.map((list) => {
            return (
                <div className={classes.infoList}>


                    <tr className={classes.infoTr}>
                        <td><div className={classes.selectList}><i className="fas fa-check"></i></div></td>
                        <td>{list.name}</td>
                        <td>{list.unitSold}</td>
                        <td>{list.stock}</td>
                        <td>{list.expireDate}</td>
                        <td><div className={classes.deletIcon}><i className="far fa-trash-alt"></i></div></td>
                    </tr>
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
                </div>
                <div className={classes.productCategoriesWrapper}>
                    <h1>this is Categories</h1>
                </div>


            </div>
        );
    }
}

export default Products;