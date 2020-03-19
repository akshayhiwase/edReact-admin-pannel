import React, { Component } from "react";
import Chart from "react-apexcharts";
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
                    data: []
                },
                {
                    name: "Latest",
                    data: []
                },
                {
                    name: "Popular",
                    data: []
                }
            ]
        };
    }

    componentWillMount = () => {


        getApiResponce().then((res) => {
            console.log(res.accountsPage)
            this.setState({
                options: {
                    xaxis: {
                        categories: res.dasbhoardPage.latestHits.months,
                    }
                },
                series: [
                    { data: [...res.dasbhoardPage.latestHits.featured] },
                    { data: [...res.dasbhoardPage.latestHits.latest] },
                    { data: [...res.dasbhoardPage.latestHits.popular] }
                ]
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