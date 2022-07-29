import { useState } from "react"
import Stepper from "./Stepper"
import StepperControl from "./StepperControl"
import { UseContextProvider } from "../../contexts/StepperContext"
import { useHomeContext } from "../../contexts/HomeContext"
import { useDispatch } from "react-redux"
import { predictDataAction } from "../../actions/homeActions"

import Basic from "../steps/Basic"
import Feature1 from "../steps/Feature1"
import Feature2 from "../steps/Feature2"
import Feature3 from "../steps/Feature3"
import Feature4 from "../steps/Feature4"
import Feature5 from "../steps/Feature5"
import Feature6 from "../steps/Feature6"
import Final from "../steps/Final"

function HomeStepper() {
  const [currentStep, setCurrentStep] = useState(1)
  const { userDataHome } = useHomeContext()
  const [loadingNext, setLoadingNext] = useState(false)

  const dispatch = useDispatch()
  const steps = [
    "Necessary Information",
    "BMI",
    "SPO2",
    "Pulse rate",
    "Temperature",
    // "BP_SYS",
    // "BP_DIA",
    "Confirmation",
  ]

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Basic />
      case 2:
        return <Feature1 />
      case 3:
        return <Feature2 />
      case 4:
        return <Feature3 />
      case 5:
        return <Feature4 />
      // case 6:
      //   return <Feature5 />
      // case 7:
      //   return <Feature6 />
      case 6:
        return <Final />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep

    direction === "next" ? newStep++ : newStep--
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    if (direction === "next") {
      console.log("currentStep", currentStep)
      userDataHome["currentStep"] = currentStep

      dispatch(predictDataAction(userDataHome, setLoadingNext))
    }
  }

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl sm:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-4 p-5 ">
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
        />
      )}
    </div>
  )
}

export default HomeStepper
