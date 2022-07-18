import React, { useState } from "react"
import ChartContent from "./ChartContent"
import Table from "./Table"
function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const openChartTab = (active) => {
    setActiveTab(active)
  }
  const openTableTab = (active) => {
    setActiveTab(active)
  }
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

        {activeTab === 0 ? (
          <div className="mx-auto mt-8 justify-center ">
            <ChartContent />
          </div>
        ) : (
          <div className="mt-8 md:overflow-visible">
            <Table />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default Tabs
