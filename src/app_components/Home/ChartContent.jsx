import React from "react"
import Chart from "react-apexcharts"
import { RingLoader } from "react-spinners"
import { conversion } from "../../utils/Functions"
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
      name: "Predicted data",
      data: [
        // For the BMI predicted data
        predict_data_reducer.predicted_data["bmi"] &&
          conversion(predict_data_reducer.predicted_data["bmi"]),

        // For the SPO2 predicted data
        predict_data_reducer.predicted_data["spo2"] &&
          conversion(predict_data_reducer.predicted_data["spo2"]),

        // For the pulse rate predicted data
        predict_data_reducer.predicted_data["pulse_rate"] &&
          conversion(predict_data_reducer.predicted_data["pulse_rate"]),

        // For the temperature predicted data
        predict_data_reducer.predicted_data["temperature"] &&
          conversion(predict_data_reducer.predicted_data["temperature"]),

        // For the bp_sys predicted data
        predict_data_reducer.predicted_data["bp_sys"] &&
          conversion(predict_data_reducer.predicted_data["bp_sys"]),

        // For the bp_dia predicted data
        predict_data_reducer.predicted_data["bp_dia"] &&
          conversion(predict_data_reducer.predicted_data["bp_dia"]),
      ],
    },
    {
      name: "Actual data",
      data: [
        // For the BMI actual data
        // predict_data_reducer.predicted_data["bmi"] !== null
        //   ? predict_data_reducer.predicted_data["bmi"]
        //   : predict_data_reducer.actual_data["bmi"],
        predict_data_reducer.actual_data["bmi"] &&
          conversion(predict_data_reducer.actual_data["bmi"]),

        // For the SPO2 actual data
        predict_data_reducer.actual_data["spo2"] &&
          conversion(predict_data_reducer.actual_data["spo2"]),

        // For the pulse rate actual data
        predict_data_reducer.actual_data["pulse_rate"] &&
          conversion(predict_data_reducer.actual_data["pulse_rate"]),

        // For the temperature actual data
        predict_data_reducer.actual_data["temperature"] &&
          conversion(predict_data_reducer.actual_data["temperature"]),

        // For the bp_sys actual data
        predict_data_reducer.actual_data["bp_sys"] &&
          conversion(predict_data_reducer.actual_data["bp_sys"]),

        // For the bp_dia actual data
        predict_data_reducer.actual_data["bp_dia"] &&
          conversion(predict_data_reducer.actual_data["bp_dia"]),
      ],
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
