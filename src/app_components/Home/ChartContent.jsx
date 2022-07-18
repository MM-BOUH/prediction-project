import React from "react"
import Chart from "react-apexcharts"

function ChartContent() {
  const options = {
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [
        "BMI",
        "Temperature",
        "Blood pressure(SYS)",
        "Blood pressure(DIAS)",
      ],
    },
  }
  const series = [
    {
      name: "Measure",
      data: [19, 36.5, 110, 75],
    },
  ]

  return (
    <div>
      <Chart options={options} series={series} type="bar" width="470" />
    </div>
  )
}

export default ChartContent
