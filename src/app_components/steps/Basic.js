import { useEffect, useState } from "react"
import { INPUT_VALIDATION } from "../../actions/types"
import { useHomeContext } from "../../contexts/HomeContext"
import { useStepperContext } from "../../contexts/StepperContext"

export default function Basic(props) {
  const { userData, setUserData } = useStepperContext()
  const { userDataHome, setUserDataHome } = useHomeContext()
  const [gender, setGender] = useState()

  const setIsButtonDisabled = props.setIsButtonDisabled

  useEffect(() => {
    if (Object.keys(userDataHome).length >= 2) {
      if (
        userDataHome["age"] !== "" &&
        (userDataHome["gender"] === "Male" ||
          userDataHome["gender"] === "Female")
      ) {
        setIsButtonDisabled(false)
      } else {
        setIsButtonDisabled(true)
      }
    } else {
      setIsButtonDisabled(true)
    }
  }, [userDataHome])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (INPUT_VALIDATION.test(value)) {
      setUserData({ ...userData, [name]: value })
      setUserDataHome({ ...userDataHome, [name]: value })
    }
  }

  const handleSelected = (e) => {
    const { name, value } = e.target
    setGender(e.target.value)
    setUserData({ ...userData, [name]: value })
    setUserDataHome({ ...userDataHome, [name]: value })
  }

  return (
    <div className="flex md:flex-row sm:flex-col">
      <div className="mx-2 w-full flex-1">
        <div className="mt-1 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Age
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["age"] || ""}
            name="age"
            placeholder="Age"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-1 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Gender
        </div>
        <div className="relative my-2 flex rounded border border-gray-200 ">
          <select
            className="block w-full py-2 pl-4 pr-8 bg-white border border-gray-300 rounded-sm appearance-none cursor-pointer focus:outline-none hover:border-gray-400"
            onChange={handleSelected}
            name="gender"
          >
            <option>Select...</option>
            <option name="male" value="Male">
              Male
            </option>
            <option name="female" value="Female">
              Female
            </option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
