import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ChartContent from "./ChartContent"
import Table from "./Table"
import { RingLoader } from "react-spinners"

function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const openChartTab = (active) => {
    setActiveTab(active)
  }
  const openTableTab = (active) => {
    setActiveTab(active)
  }

  // To get the data from state and pass it through the chart and the tab components
  const predictionResult = useSelector((state) => state.predictDataIndex)
  const { loading, predict_data_reducer } = predictionResult

  const history1 = useSelector((state) => state.history1)
  const history2 = useSelector((state) => state.history2)
  const history3 = useSelector((state) => state.history3)
  const history4 = useSelector((state) => state.history4)
  const history5 = useSelector((state) => state.history5)
  const history6 = useSelector((state) => state.history6)
  const history7 = useSelector((state) => state.history7)

  useEffect(() => {
    console.log("Step from useEffect ", predict_data_reducer)
  }, [predict_data_reducer])

  return (
    <React.Fragment>
      <div className="flex flex-col mx-auto mt-2 rounded-2xl bg-white pb-2 shadow-xl  sm:w-auto lg:w-1/2 mb-10">
        <div className="flex mx-auto mt-2  space-x-10">
          <button
            onClick={() => openChartTab(0)}
            className={`cursor-pointer rounded-md bg-brightRed py-2 px-2
          font-semibold text-white transition duration-200 ease-in-out 
          hover:bg-slate-700 hover:text-white  ${
            activeTab === 0 && " bg-slate-700 text-white"
          }`}
          >
            Show Chart
          </button>
          <button
            className={`cursor-pointer rounded-md bg-brightRed py-2 px-2
          font-semibold text-white transition duration-200 ease-in-out 
          hover:bg-slate-700 hover:text-white  ${
            activeTab === 1 && " bg-slate-700 text-white"
          }`}
            onClick={() => openTableTab(1)}
          >
            Show Table
          </button>
        </div>

        {
          predict_data_reducer.length === 0 ? (
            <div className="mx-auto mt-8 justify-center mb-3">
              <div>
                <RingLoader color={"#0099ff"} loading={true} />
              </div>
            </div>
          ) : activeTab === 0 ? (
            // <div className="mx-auto mt-8 justify-center ">
            <div className="mx-auto mt-8 justify-center">
              <ChartContent predictionResult={predictionResult} />
            </div>
          ) : // </div>
          activeTab === 1 && predict_data_reducer.length !== 0 ? (
            // <div className="mt-8 md:overflow-visible">
            <Table
              loading={loading}
              history1={history1}
              history2={history2}
              history3={history3}
              history4={history4}
              history5={history5}
              history6={history6}
              history7={history7}
            />
          ) : (
            // </div>
            ""
          )
          //   (
          // <div className="mx-auto mt-8 justify-center mb-3">
          //   <h2>Enter some data to start your prediction journey please!</h2>
          // </div>
          // )
        }
      </div>
    </React.Fragment>
  )
}

export default Tabs
