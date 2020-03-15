import React, { Component } from 'react';
import Chart from 'react-apexcharts'

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
            <div className="donut">
                <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
            </div>
        );
    }
}

export default Storage;