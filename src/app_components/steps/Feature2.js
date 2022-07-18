import { useStepperContext } from "../../contexts/StepperContext"
import { INPUT_VALIDATION } from "../../actions/types"

export default function Payment() {
  const { userData, setUserData } = useStepperContext()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (INPUT_VALIDATION.test(value)) {
      setUserData({ ...userData, [name]: value })
    }
  }
  return (
    <div className="flex md:flex-row sm:flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-1 text-gray-500 text-xs leading-8 uppercase">
          BP(SYS)
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["card"] || ""}
            name="card"
            placeholder="BP(SYS)"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-1 text-gray-500 text-xs leading-8 uppercase">
          BP(DIS)
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["exp"] || ""}
            name="exp"
            placeholder="BP (DIS)"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  )
}
