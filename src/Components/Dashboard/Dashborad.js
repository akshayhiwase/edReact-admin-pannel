import React from 'react';
import classes from './Dashboard.module.css';
import LatestHits from '../Charts/LatestHits/LatestHits';
import Performance from '../Charts/Performance/Performance';
import Storage from '../Charts/StorageInformation/StorageInfo';
import getApiResponce from '../Utils/Utils';


class Dashboard extends React.Component {

    state = {
        apiResponse: [],
        notificationList: [],
    }
    componentWillMount = () => {
        getApiResponce().then((res) => {
            console.log(res)
            this.setState({
                apiResponse: res.dasbhoardPage.orders,
                notificationList: [...res.dasbhoardPage.notifications]
            })
        }).catch(err => console.log(err))
    }

    orderSummeryDetails = () => {

        const response = this.state.apiResponse
        if (response.status === "Moving") {
            return (classes.orderSummeryMoving)
        } else if (response.status === "Pending") {
            return (classes.orderSummeryPending)
        } else {
            return (classes.orderSummeryCancel)
        }

    }




    render() {
        const notificationList = this.state.notificationList.map((list) => {
            return (
                <div className={classes.notificationContent}>
                    <div className={classes.notificationImage}>
                        <img src={list.pic} alt="" />
                    </div>
                    <div className={classes.notificationInfo}>
                        <p>{list.message}</p>
                        <span>{list.time} ago</span>
                    </div>

                </div>
            )
        })


        const orderList = this.state.apiResponse.map((list) => {

            return (
                <div className={classes.orderData} key={list.orderNo}>
                    <tr>
                        <td>#{list.orderNo}</td>
                        <td>
                            <div className={classes.statusWrapper}>
                                <div className={[classes.orderSummery, this.orderSummeryDetails()].join("")}></div>
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
                <div className={classes.dashboardHead}>
                    <p>Welcome back,<strong>Admin</strong> </p>

                </div>
                <div className={classes.chartSection}>
                    <div className={classes.chartsWrapper}>
                        <LatestHits />

                    </div>
                    <div className={classes.chartsWrapper}>
                        <Performance />

                    </div>
                    <div className={classes.chartsWrapper}>
                        <Storage />

                    </div>
                    <div className={classes.chartsWrapper}>
                        <div className={classes.notificationHead}>
                            <h3>Notification List</h3>
                        </div>
                        <div className={classes.notificationContentWrapper}>
                            {notificationList}
                        </div>


                    </div>
                </div>
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