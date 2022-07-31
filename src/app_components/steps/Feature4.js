import { useEffect } from "react"
import { INPUT_VALIDATION } from "../../actions/types"
import { useHomeContext } from "../../contexts/HomeContext"
import { useStepperContext } from "../../contexts/StepperContext"

export default function Feature4(props) {
  const { userData, setUserData } = useStepperContext()
  const { userDataHome, setUserDataHome } = useHomeContext()

  const setIsButtonDisabled = props.setIsButtonDisabled

  const handleChange = (e) => {
    const { name, value } = e.target
    if (INPUT_VALIDATION.test(value)) {
      setUserData({ ...userData, [name]: value })
      setUserDataHome({ ...userDataHome, [name]: value })
    }
  }
  useEffect(() => {
    if (Object.keys(userDataHome).length >= 7) {
      if (userDataHome["temperature"] !== "") {
        setIsButtonDisabled(false)
      } else {
        setIsButtonDisabled(true)
      }
    } else {
      setIsButtonDisabled(true)
    }
  }, [userDataHome])
  return (
    <div className="flex flex-col md:flex-row sm:flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-1 text-gray-500 text-xs leading-8 uppercase">
          Temperature
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["temperature"] || ""}
            name="temperature"
            placeholder="Temperature"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  )
}
