import React from "react"
import Nav from "./Nav"
import HomeStepper from "./HomeStepper"
import Tabs from "./Tabs"
import { UseHomeContextProvider } from "../../contexts/HomeContext"

function Home() {
  return (
    <React.Fragment>
      <Nav />
      <UseHomeContextProvider>
        <HomeStepper />
        <Tabs />
      </UseHomeContextProvider>
    </React.Fragment>
  )
}

export default Home
