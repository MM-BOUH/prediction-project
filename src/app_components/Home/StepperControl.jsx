import { SyncLoader } from "react-spinners"

export default function StepperControl({
  handleClick,
  currentStep,
  steps,
  loadingNext,
}) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>
      {loadingNext ? (
        <button
          // onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-brightRed py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
          disabled={loadingNext === true}
        >
          <SyncLoader color={"#ebebf2"} loading={true} size={12} />
        </button>
      ) : (
        <button
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-brightRed py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
          disabled={loadingNext === true}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  )
}
