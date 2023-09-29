import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { faker } from '@faker-js/faker';
import './style.css'
import LoaderComponent from "../../../Components/Loader";

const SelectedCoinsLineChart = ({ coin1Data, coin2Data, coin1, coin2 }) => {
    // console.log(coinDate);
    const prices1 = coin1Data.prices;
    const prices2 = coin2Data.prices;
    const [isLoading, setIsLoading] = useState(false);


    const options = {
        plugins: {
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',

                // grid line settings
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
            // title: "Hi"
        }
    }

    function convertDate(unixDate) {
        const date = new Date(unixDate);
        // console.log(date.getDate() + "/" + (date.getMonth() + 1));
        return date.getDate() + "/" + (date.getMonth() + 1);
    }

    const chartData = {
        labels: prices1.map((coin) => convertDate(coin[0])),
        datasets: [
            {
                label: coin1,
                data: prices1.map((coin) => { return coin[1] }),
                borderColor: 'rgb(0, 100, 0)',
                backgroundColor: 'rgb(0, 100, 0)',
                yAxisID: 'y',
            },
            {
                label: coin2,
                data: prices2.map((coin) => { return `${coin[1]}` }),
                borderColor: 'rgb(37, 37, 162)',
                backgroundColor: 'rgb(37, 37, 162)',
                yAxisID: 'y1',
            }
        ],
    }

    return (
        <div className="chart-compare-section">
            {isLoading && <LoaderComponent />}
            {!isLoading && <div className="chart-compare-main">
                <Line data={chartData} options={options} />
            </div>}
        </div>
    );
}

export default SelectedCoinsLineChart;





// const config = {
//     type: 'line',
//     data: data,
//     options: {
//         responsive: true,
//         interaction: {
//             mode: 'index',
//             intersect: false,
//         },
//         stacked: false,
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Chart.js Line Chart - Multi Axis'
//             }
//         },
//         scales: {
//             y: {
//                 type: 'linear',
//                 display: true,
//                 position: 'left',
//             },
//             y1: {
//                 type: 'linear',
//                 display: true,
//                 position: 'right',

//                 // grid line settings
//                 grid: {
//                     drawOnChartArea: false, // only want the grid lines for one axis to show up
//                 },
//             },
//         }
//     },
// };