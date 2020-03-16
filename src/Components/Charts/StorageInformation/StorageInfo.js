import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import classes from './StorageInfo.module.css';

class Storage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {},
            series: [9.15, 6.5, 18.24],
            labels: ['Available', 'System', 'Used']
        }
    }

    render() {

        return (
            <div className={classes.storageChartContainer}>
                <div className="donut">
                    <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
                </div>
            </div>
        );
    }
}

export default Storage;