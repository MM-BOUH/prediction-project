import { combineReducers } from "redux"

import { predictDataReducer } from "./homeReducers"

export default combineReducers({
  // For the home page
  predictDataIndex: predictDataReducer,
})
