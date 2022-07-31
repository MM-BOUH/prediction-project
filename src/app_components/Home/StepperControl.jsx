import React from "react"
import toast, { Toaster } from "react-hot-toast"
import { SyncLoader } from "react-spinners"

export default function StepperControl({
  handleClick,
  currentStep,
  steps,
  loadingNext,
  isButtonDisabled,
}) {
  const notify = () => toast.error("Enter some data please!")
  const warn = () => toast.error("Wait until this prediction finishes!")
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        disabled={loadingNext === true}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      {loadingNext ? (
        <>
          <button
            className="cursor-not-allowed rounded-lg bg-brightRed py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
            onClick={warn}
          >
            <SyncLoader color={"#ebebf2"} loading={true} size={12} />
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </>
      ) : isButtonDisabled === true ? (
        <>
          <button
            onClick={notify}
            className="cursor-not-allowed rounded-lg bg-brightRed py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
          >
            Next
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </>
      ) : (
        <button
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-brightRed py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
          disabled={isButtonDisabled === true}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  )
}
