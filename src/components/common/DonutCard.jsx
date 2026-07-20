import React from "react";
import Chart from "react-apexcharts";

import "./DonutCard.css";

const DonutCard = ({
  title,
  series,
  labels,
  colors,
  totalLabel = "Resources",
}) => {
  const options = {
    chart: {
      type: "donut",
    },

    labels,

    colors,

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "80%",

          labels: {
            show: true,

            name: {
              show: true,
              fontSize: "18px",
              fontWeight: 500,
            },

            value: {
              show: true,
              fontSize: "18px",
              fontWeight: 700,
            },

            total: {
              show: true,
              label: totalLabel,

              formatter: () =>
                series.reduce((sum, value) => sum + value, 0),
            },
          },
        },
      },
    },
  };

  return (
    <div className="dashboard-card">

      <h3 className="card-title">{title}</h3>

      <div className="resource-card">

        <div className="donut-area">
          <Chart
            options={options}
            series={series}
            type="donut"
            width={180}
            height={180}
          />
        </div>

        <div className="legend-area">

          {labels.map((label, index) => (

            <div className="legend-item" key={label}>

              <span
                className="legend-color"
                style={{
                  backgroundColor: colors[index],
                }}
              />

              <span className="legend-label">
                {label}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default DonutCard;