import React, { Component } from "react";
import Chart from "react-apexcharts";
import Axios from 'axios';
import getApiResponce from "../../Utils/Utils";
class LatestHits extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latestHitsList: [],
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: []
                }
            },
            series: [
                {
                    name: "Featured",
                    data: [43, 20, 39, 46, 86, 66, 80]
                },
                {
                    name: "Latest",
                    data: [88, 70, 79, 56, 50, 55, 72]
                },
                {
                    name: "Popular",
                    data: [32, 47, 38, 21, 55, 75, 70]
                }
            ]
        };
    }

    componentWillMount = () => {

        getApiResponce().then((res) => {
            console.log(res.accountsPage)
            this.setState({
                options: { xaxis: { categories: res.dasbhoardPage.latestHits.months } }
            })
        }).catch(err => console.log(err))

    }

    render() {


        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestHits;