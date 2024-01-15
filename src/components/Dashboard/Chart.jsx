import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import { useStore } from '../../store/dashboardStore';

const Chart = () => {
    const chartData = useStore((state) => state.chartData)
    const currentTime = useStore((state) => state.chartFilters.time)

    var startingPointX = ""
    const numberToMonth = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };

    const convertNumToMonth = (num) => {
        if (currentTime === "Monthly") {
            return numberToMonth[num]
        }
        else return num
    }

    if (currentTime === "Monthly") {
        startingPointX = 1
    } else {
        startingPointX = 2000
    }
    useEffect(() => {

        const chartOptions = {
            chart: {
                type: 'areaspline'
            },
            title: {
                text: '',
                align: 'left'
            },
            subtitle: {
                text: '',
                align: 'left'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                lineColor: 'rgba(109, 125, 147, 0.12)',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                tickWidth: 0,
                labels: {
                    style: {
                        fontFamily: 'DM Sans',
                        color: '#6D7D93',
                        fontWeight: 800,
                        fontSize: "12px"
                    }
                }
            },
            yAxis: {
                gridLineWidth: 0,
                lineWidth: 1,
                minorGridLineWidth: 0,
                gridLineColor: "none",
                lineColor: 'rgba(109, 125, 147, 0.12)',
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        fontFamily: 'DM Sans',
                        color: '#6D7D93',
                        fontWeight: 'bold',
                        fontSize: "12px"

                    }
                }
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                formatter: function () {
                    return convertNumToMonth(this.x) + '<br/><b>' + "$" + this.y + '</b>';
                },

                backgroundColor: '#808080',
                borderColor: 'none',
                borderWidth: 1,
                style: {
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    fontFamily: 'DM Sans',
                },
            },

            plotOptions: {
                series: {
                    pointStart: startingPointX,
                    marker: {
                        enabled: false
                    }
                },
                areaspline: {
                    fillColor: 'rgba(3, 123, 203, 0.1)',
                    fillOpacity: 0.1,
                }
            },
            series: [
                {
                    name: 'Balance',
                    data: chartData
                },
            ]
        };

        Highcharts.chart('chart-container', chartOptions);
    }, [chartData]);

    return <div id="chart-container" className='chart-container' />;
};

export default Chart;
