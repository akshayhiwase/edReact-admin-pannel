import React, { Component } from "react";
import Chart from "react-apexcharts";
import Axios from 'axios';
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
        Axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
            .then((responce) => {
                console.log(responce.data.dasbhoardPage.latestHits.months)

                this.setState({
                    options: { xaxis: { categories: responce.data.dasbhoardPage.latestHits.months } },
                    // series: {
                    //     data1: responce.data.dasbhoardPage.latestHits.featured,
                    //     data2: responce.data.dasbhoardPage.latestHits.latest,
                    //     data3: responce.data.dasbhoardPage.latestHits.popular
                    // }
                })
                console.log(this.state.options.xaxis.categories);
            })
            .catch(err => console.log(err))
        // this.setState({ apiResponse: getApiRequest() })

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