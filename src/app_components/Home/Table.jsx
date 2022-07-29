import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

function Table(props) {
  const loading = props.loading
  const { prediction_history1 } = props.history1
  const { prediction_history2 } = props.history2
  const { prediction_history3 } = props.history3
  const { prediction_history4 } = props.history4
  const { prediction_history5 } = props.history5
  const { prediction_history6 } = props.history6
  const { prediction_history7 } = props.history7

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto ">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  ></th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    BMI
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    SPO2
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Pulse rate
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Temperature
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    BP(sys)
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    BP(DIA)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* First prediction */}
                <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    1st prediction
                  </td>
                  <td class="text-sm text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                    {prediction_history1.predicted_data["bmi"]}
                  </td>
                  <td class="text-sm text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                    {prediction_history1.predicted_data["spo2"]}
                  </td>
                  <td class="text-sm text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                    {prediction_history1.predicted_data["pulse_rate"]}
                  </td>
                  <td class="text-sm text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                    {prediction_history1.predicted_data["temperature"]}
                  </td>
                  <td class="text-sm text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                    {prediction_history1.predicted_data["bp_sys"]}
                  </td>
                  <td class="text-sm text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                    {prediction_history1.predicted_data["bp_dia"]}
                  </td>
                </tr>

                {/* Second Prediction */}
                {prediction_history2.length !== 0 ? (
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2nd prediction
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history2.actual_data["bmi"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history2.predicted_data["spo2"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history2.predicted_data["pulse_rate"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history2.predicted_data["temperature"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history2.predicted_data["bp_sys"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history2.predicted_data["bp_dia"]}
                    </td>
                  </tr>
                ) : (
                  ""
                )}

                {/* Third Prediction */}
                {prediction_history3.length !== 0 ? (
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3rd prediction
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history3.actual_data["bmi"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history3.actual_data["spo2"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history3.predicted_data["pulse_rate"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history3.predicted_data["temperature"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history3.predicted_data["bp_sys"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history3.predicted_data["bp_dia"]}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
                {/* Fourth Prediction */}
                {prediction_history4.length !== 0 ? (
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      4th prediction
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history4.actual_data["bmi"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history4.actual_data["spo2"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history4.actual_data["pulse_rate"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history4.predicted_data["temperature"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history4.predicted_data["bp_sys"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history4.predicted_data["bp_dia"]}
                    </td>
                  </tr>
                ) : (
                  ""
                )}

                {/* Fifth Prediction */}
                {prediction_history5.length !== 0 ? (
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      5th prediction
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history5.actual_data["bmi"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history5.actual_data["spo2"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history5.actual_data["pulse_rate"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history5.actual_data["temperature"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history5.predicted_data["bp_sys"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history5.predicted_data["bp_dia"]}
                    </td>
                  </tr>
                ) : (
                  ""
                )}

                {/* Sixth Prediction */}

                {prediction_history6.length !== 0 ? (
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      6th prediction
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history6.actual_data["bmi"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history6.actual_data["spo2"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history6.actual_data["pulse_rate"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history6.actual_data["temperature"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history6.actual_data["bp_sys"]}
                    </td>
                    <td class="text-md text-blue-400 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history6.predicted_data["bp_dia"]}
                    </td>
                  </tr>
                ) : (
                  ""
                )}

                {/* Seventh Prediction */}

                {prediction_history7.length !== 0 ? (
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      7th prediction
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history7.actual_data["bmi"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history7.actual_data["spo2"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history7.actual_data["pulse_rate"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history7.actual_data["temperature"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history7.actual_data["bp_sys"]}
                    </td>
                    <td class="text-md text-green-500 font-light px-6 py-4 whitespace-nowrap">
                      {prediction_history7.actual_data["bp_dia"]}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
