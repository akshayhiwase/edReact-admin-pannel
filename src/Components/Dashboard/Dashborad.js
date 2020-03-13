import React from 'react';
import classes from './Dashboard.module.css';
import Axios from 'axios';
import { getApiRequest } from '../Utils/Utils';


class Dashboard extends React.Component {

    state = {
        apiResponse: []
    }
    componentWillMount = () => {
        Axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
            .then((responce) => {
                this.setState({ apiResponse: responce.data.dasbhoardPage.orders })
            })
            .catch(err => console.log(err))
        // this.setState({ apiResponse: getApiRequest() })

    }

    orderSummeryDetails = () => {

        this.state.apiResponse.filter((list) => {

            if (list.status === "Moving") {
                console.log("Moving")
                return (classes.orderSummeryMoving)
            } else if (list.status === "Pending") {
                console.log("Pending")
                return (classes.orderSummeryPending)
            } else {
                console.log("Cancelled")
                return (classes.orderSummeryCancel)
            }

        })

    }


    render() {
        console.log(this.state.apiResponse)
        const orderList = this.state.apiResponse.map((list) => {

            return (
                <div className={classes.orderData} key={list.orderNo}>

                    <tr>
                        <td>#{list.orderNo}</td>
                        <td>
                            <div className={classes.statusWrapper}>
                                <div className={[classes.orderSummery, this.orderSummeryDetails()].join(" ")}></div>
                                <div className={classes.statusSummery}>{list.status}</div>
                            </div>
                        </td>
                        <td>{list.operators}</td>
                        <td>{list.location}</td>
                        <td>{list.distance}</td>
                        <td>{list.startDate}</td>
                        <td>{list.deliveryDate}</td>
                    </tr>

                </div>
            )

        })
        return (
            <div className={classes.dashboardSection}>
                <div className={classes.orderList}>
                    <div><h1>Order List</h1></div>

                    <div className={classes.orderListWrapper}>
                        <div className={classes.orderHead}>
                            <tr>
                                <td>Order No</td>
                                <td>Status</td>
                                <td>Operators</td>
                                <td>Location</td>
                                <td>Distance</td>
                                <td>Start Date</td>
                                <td>Delivery Date</td>
                            </tr>
                        </div>
                        {orderList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;