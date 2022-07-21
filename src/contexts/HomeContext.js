import { createContext, useContext, useState } from "react"

const HomeContext = createContext({ userDataHome: "", setUserDataHome: null })

export function UseHomeContextProvider({ children }) {
  const [userDataHome, setUserDataHome] = useState("")

  return (
    <HomeContext.Provider value={{ userDataHome, setUserDataHome }}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHomeContext() {
  const { userDataHome, setUserDataHome } = useContext(HomeContext)

  return { userDataHome, setUserDataHome }
}
