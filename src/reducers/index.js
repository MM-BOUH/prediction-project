import { combineReducers } from "redux"

import {
  predictDataReducer,
  predictionHistoryReducer1,
  predictionHistoryReducer2,
  predictionHistoryReducer3,
  predictionHistoryReducer4,
  predictionHistoryReducer5,
  predictionHistoryReducer6,
  predictionHistoryReducer7,
} from "./homeReducers"

export default combineReducers({
  // For the home page
  predictDataIndex: predictDataReducer,
  history1: predictionHistoryReducer1,
  history2: predictionHistoryReducer2,
  history3: predictionHistoryReducer3,
  history4: predictionHistoryReducer4,
  history5: predictionHistoryReducer5,
  history6: predictionHistoryReducer6,
  history7: predictionHistoryReducer7,
})
