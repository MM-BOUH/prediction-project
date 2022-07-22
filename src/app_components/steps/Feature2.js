import { useStepperContext } from "../../contexts/StepperContext"
import { INPUT_VALIDATION } from "../../actions/types"
import { useHomeContext } from "../../contexts/HomeContext"

export default function Feature2() {
  const { userData, setUserData } = useStepperContext()
  const { userDataHome, setUserDataHome } = useHomeContext()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (INPUT_VALIDATION.test(value)) {
      setUserData({ ...userData, [name]: value })
      setUserDataHome({ ...userDataHome, [name]: value })
    }
  }
  return (
    <div className="flex md:flex-row sm:flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-1 text-gray-500 text-xs leading-8 uppercase">
          SPO2
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["SPO2"] || ""}
            name="SPO2"
            placeholder="SPO2"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  )
}
