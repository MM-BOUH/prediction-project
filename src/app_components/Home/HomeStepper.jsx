import { useState } from "react"
import Stepper from "./Stepper"
import StepperControl from "./StepperControl"
import { UseContextProvider } from "../../contexts/StepperContext"

import Basic from "../steps/Basic"
import Feature1 from "../steps/Feature1"
import Feature2 from "../steps/Feature2"
import Final from "../steps/Final"

function HomeStepper() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    "Necessary Information",
    "Features",
    "Features",
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
        return <Final />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep

    direction === "next" ? newStep++ : newStep--
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
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
        />
      )}
    </div>
  )
}

export default HomeStepper
