import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHomeContext } from "../../contexts/HomeContext"
import { UseContextProvider } from "../../contexts/StepperContext"

import { predictDataAction } from "../../actions/homeActions"
import {
  AGE_MAX_VALUE,
  AGE_MIN_VALUE,
  BMI_MAX_AVALUE,
  BMI_MIN_VALUE,
  BP_DIA_MAX_VALUE,
  BP_DIA_MIN_VALUE,
  BP_SYS_MAX_VALUE,
  BP_SYS_MIN_VALUE,
  Pulse_Rate_MAX_VALUE,
  Pulse_Rate_MIN_VALUE,
  SPO2_MAX_VALUE,
  SPO2_MIN_VALUE,
  Temperature_MAX_VALUE,
  Temperature_MIN_VALUE,
} from "../../actions/types"
import Basic from "../steps/Basic"
import Feature1 from "../steps/Feature1"
import Feature2 from "../steps/Feature2"
import Feature3 from "../steps/Feature3"
import Feature4 from "../steps/Feature4"
import Feature5 from "../steps/Feature5"
import Feature6 from "../steps/Feature6"
import Final from "../steps/Final"
import Stepper from "./Stepper"
import StepperControl from "./StepperControl"

function HomeStepper() {
  const [currentStep, setCurrentStep] = useState(1)
  const { userDataHome } = useHomeContext()
  const [loadingNext, setLoadingNext] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const dispatch = useDispatch()

  const steps = [
    "Necessary Information",
    "BMI",
    "SPO2",
    "Pulse rate",
    "Temperature",
    "BP_SYS",
    "BP_DIA",
    "Confirmation",
  ]

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Basic setIsButtonDisabled={setIsButtonDisabled} />
      case 2:
        return <Feature1 setIsButtonDisabled={setIsButtonDisabled} />
      case 3:
        return <Feature2 setIsButtonDisabled={setIsButtonDisabled} />
      case 4:
        return <Feature3 setIsButtonDisabled={setIsButtonDisabled} />
      case 5:
        return <Feature4 setIsButtonDisabled={setIsButtonDisabled} />
      case 6:
        return <Feature5 setIsButtonDisabled={setIsButtonDisabled} />

      case 7:
        return <Feature6 setIsButtonDisabled={setIsButtonDisabled} />

      case 8:
        return <Final loadingNext={loadingNext} />
      default:
    }
  }

  const checkValues = (userdataHome, currentSt) => {
    if (
      currentSt === 1 &&
      (userdataHome["age"] < AGE_MIN_VALUE ||
        userdataHome["age"] > AGE_MAX_VALUE)
    ) {
      alert(`Age should be between ${AGE_MIN_VALUE} and ${AGE_MAX_VALUE}`)
      setCurrentStep(currentSt)
    } else if (
      currentStep === 2 &&
      (userdataHome["bmi"] < BMI_MIN_VALUE ||
        userdataHome["bmi"] > BMI_MAX_AVALUE)
    ) {
      alert(`BMI should be between ${BMI_MIN_VALUE} and ${BMI_MAX_AVALUE}`)
      setCurrentStep(currentSt)
    } else if (
      currentStep === 3 &&
      (userdataHome["SPO2"] < SPO2_MIN_VALUE ||
        userdataHome["SPO2"] > SPO2_MAX_VALUE)
    ) {
      alert(`SPO2 should be between ${SPO2_MIN_VALUE} and ${SPO2_MAX_VALUE}`)
      setCurrentStep(currentSt)
    } else if (
      currentStep === 4 &&
      (userdataHome["pulse_rate"] < Pulse_Rate_MIN_VALUE ||
        userdataHome["pulse_rate"] > Pulse_Rate_MAX_VALUE)
    ) {
      alert(
        `Pulse rate should be between ${Pulse_Rate_MIN_VALUE} and ${Pulse_Rate_MAX_VALUE}`
      )
      setCurrentStep(currentSt)
    } else if (
      currentStep === 5 &&
      (userdataHome["temperature"] < Temperature_MIN_VALUE ||
        userdataHome["temperature"] > Temperature_MAX_VALUE)
    ) {
      alert(
        `Temperature should be between ${Temperature_MIN_VALUE} and ${Temperature_MAX_VALUE}`
      )
      setCurrentStep(currentSt)
    } else if (
      currentStep === 6 &&
      (userdataHome["bp_sys"] < BP_SYS_MIN_VALUE ||
        userdataHome["bp_sys"] > BP_SYS_MAX_VALUE)
    ) {
      alert(
        `BP(sys) should be between ${BP_SYS_MIN_VALUE} and ${BP_SYS_MAX_VALUE}`
      )
      setCurrentStep(currentSt)
    } else if (
      currentStep === 7 &&
      (userdataHome["bp_dia"] < BP_DIA_MIN_VALUE ||
        userdataHome["bp_dia"] > BP_DIA_MAX_VALUE)
    ) {
      alert(
        `BP(dia) should be between ${BP_DIA_MIN_VALUE} and ${BP_DIA_MAX_VALUE}`
      )
      setCurrentStep(currentSt)
    } else {
      userDataHome["currentStep"] = currentStep
      dispatch(predictDataAction(userDataHome, setLoadingNext))
    }
  }
  const handleClick = (direction) => {
    let newStep = currentStep
    direction === "next" ? newStep++ : newStep--

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)

    if (direction === "next") {
      checkValues(userDataHome, currentStep)
    }
  }

  return (
    <div
      className="mx-auto rounded-2xl bg-white pb-2 shadow-xl sm:w-1/2 
    "
    >
      {/* Stepper */}
      <div className="horizontal container mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-4 p-5 sm:-mt-12 md:my-4 md:p-5">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          loadingNext={loadingNext}
          isButtonDisabled={isButtonDisabled}
        />
      )}
    </div>
  )
}

export default HomeStepper
