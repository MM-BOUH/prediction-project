import toast, { Toaster } from "react-hot-toast"
import { SyncLoader } from "react-spinners"

export default function Final(props) {
  const warn = () => toast.error("Wait until this prediction finishes!")

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Thank you!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          For spending sometime with us.
        </div>
        {props.loadingNext === true ? (
          <button
            className="mt-10 h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100
            "
            onClick={warn}
            disabled={props.loadingNext === true}
          >
            <SyncLoader color={"#ebebf2"} loadingNext={true} size={12} />
            <Toaster position="top-right" />
          </button>
        ) : (
          <a className="mt-10" href="/">
            <button
              className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100
              "
            >
              Close
            </button>
          </a>
        )}
      </div>
    </div>
  )
}
