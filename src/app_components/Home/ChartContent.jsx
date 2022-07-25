import React from "react"
import Chart from "react-apexcharts"
import { RingLoader } from "react-spinners"

function ChartContent(props) {
  const { loading, error, predict_data_reducer } = props.predictionResult

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
        "SPO2",
        "Pulse rate",
        "Temperature",
        "BP SYS",
        "BP DIA",
      ],
    },
  }
  const series = [
    {
      name: "Measure",
      data: [
        predict_data_reducer.predicted_data["bmi"],
        predict_data_reducer.predicted_data["spo2"],
        predict_data_reducer.predicted_data["pulse_rate"],
        predict_data_reducer.predicted_data["temperature"],
        predict_data_reducer.predicted_data["bp_sys"],
        predict_data_reducer.predicted_data["bp_dia"],
      ],
      // data: [12, 45, 65, 36, 45, 41],
    },
  ]

  return (
    <>
      {loading ? (
        <div>
          <RingLoader color={"#0099ff"} loading={true} />
        </div>
      ) : error ? (
        <div className="mx-auto mt-8 justify-center mb-3">
          <h2>An error has occurred!</h2>
        </div>
      ) : (
        <Chart options={options} series={series} type="bar" width="470" />
      )}

      {/* <div>
        <Chart options={options} series={series} type="bar" width="470" />
      </div> */}
    </>
  )
}

export default ChartContent
