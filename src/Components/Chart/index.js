import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import "./style.css";

const LineChart = ({ coinData }) => {
  // console.log(coinDate);
  const prices = coinData.prices;

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    // title: "Hi"
  };

  function convertDate(unixDate) {
    const date = new Date(unixDate);
    // console.log(date.getDate() + "/" + (date.getMonth() + 1));
    return date.getDate() + "/" + (date.getMonth() + 1);
  }

  const chartData = {
    labels: prices.map((coin) => convertDate(coin[0])),
    datasets: [
      {
        label: "Price",
        data: prices.map((coin) => {
          return coin[1];
        }),
        borderColor: "rgb(2, 100, 2)",
        backgroundColor: "rgb(2, 100, 2, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-section">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
