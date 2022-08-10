import React from "react"
import { UseHomeContextProvider } from "../../contexts/HomeContext"
import HomeStepper from "./HomeStepper"
import Nav from "./Nav"
import Tabs from "./Tabs"
import Footer from './Footer'
function Home() {
  return (
    <React.Fragment>
      <Nav />
      <UseHomeContextProvider>
        <HomeStepper />
        <Tabs />
      </UseHomeContextProvider>
      <Footer />
    </React.Fragment>
  )
}

export default Home
