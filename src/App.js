import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Home from "./app_components/Home/Home"
import history from "./browserHistory"
import configureStore from "./config/configureStore"

// If there is any authentication system.
// To get the user reconnected, you need to dispatch loading the user

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history} basename="/">
        {/* <ScrollToTop>
        try to add it if you want a smooth routing system
        </ScrollToTop> */}
        <Home />
      </BrowserRouter>
    </Provider>
  )
}

export default App
