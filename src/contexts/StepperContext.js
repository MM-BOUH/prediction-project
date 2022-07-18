import { createContext, useContext, useState } from "react"

const StepperContext = createContext({ userData: "", setUserData: null })

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("")

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  )
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext)
  console.log("Helllo every one ", userData)
  console.log("Helllo every one ", userData["username"])
  return { userData, setUserData }
}
