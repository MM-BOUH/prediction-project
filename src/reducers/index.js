import { combineReducers } from "redux"

import { transactionNumberReducer } from "./homeReducers"

export default combineReducers({
  // For the home page
  transactionNumber: transactionNumberReducer,
})
