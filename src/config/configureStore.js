import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

const initialState = {}
const middleware = [thunkMiddleware]

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}
