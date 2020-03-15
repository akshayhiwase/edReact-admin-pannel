import React, { Component } from "react";
import Chart from "react-apexcharts";

class Performance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["Aqua", "Blue", "Green", "Orange", "Purple", "Red", "Orange", "Yellow"]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [40, 44, 28, 38, 58, 34, 48]
                }
            ]
        };
    }

    // componentWillMount = () => {
    //     Axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    //         .then((responce) => {
    //             console.log(responce.data.dasbhoardPage.latestHits.months)

    //             this.setState({
    //                 options: { xaxis: { categories: responce.data.dasbhoardPage.latestHits.months } },
    //                 // series: {
    //                 //     data1: responce.data.dasbhoardPage.latestHits.featured,
    //                 //     data2: responce.data.dasbhoardPage.latestHits.latest,
    //                 //     data3: responce.data.dasbhoardPage.latestHits.popular
    //                 // }
    //             })
    //             console.log(this.state.options.xaxis.categories);
    //         })
    //         .catch(err => console.log(err))
    //     // this.setState({ apiResponse: getApiRequest() })

    // }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Performance;
