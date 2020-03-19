import React, { Component } from "react";
import Chart from "react-apexcharts";
import getApiResponce from "../../Utils/Utils";


class Performance extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [],
                colors: ["Aqua", "Blue", "Green", "Orange", "Purple", "Red", "Yellow"],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // console.log(chart, w, e)
                        }
                    }
                },
                colors: ["Aqua", "Blue", "Green", "Orange", "Purple", "Red", "Yellow"],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: true
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: ["Aqua", "Blue", "Green", "Orange", "Purple", "Red", "Yellow"],
                    labels: {
                        style: {
                            colors: ["Aqua", "Blue", "Green", "Orange", "Purple", "Red", "Yellow"],
                            fontSize: '12px'
                        }
                    }
                }
            },


        };
    }

    componentWillMount = () => {
        getApiResponce().then((res) => {
            console.log(Object.values(res.dasbhoardPage.performance))

            const performanceArray = [...Object.values(res.dasbhoardPage.performance)]
            console.log(performanceArray)
            this.setState({ series: [{ data: performanceArray }] })
        }).catch(err => console.log(err))

    }



    render() {
        return (


            < div className="app" >
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
            </div >
        );
    }
}

export default Performance;
