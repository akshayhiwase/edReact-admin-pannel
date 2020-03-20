import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import classes from './StorageInfo.module.css';
import getApiResponce from '../../Utils/Utils';



class Storage extends Component {

    constructor(props) {

        super(props);
        this.state = {

            series: [],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Available', 'System', 'Used'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }
    componentWillMount = () => {
        getApiResponce().then((res) => {
            this.setState({ series: Object.values(res.dasbhoardPage.storage) })
        }).catch(err => console.log(err))

    }


    render() {

        return (
            <div className={classes.storageChartContainer}>
                <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} labels={this.state.labels} type="pie" width="380" />
                </div>
            </div>
        );
    }
}

export default Storage;