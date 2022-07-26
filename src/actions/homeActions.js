import axios from "axios"
import {
  HOST,
  PREDICT_DATA_REQUEST,
  PREDICT_DATA_SUCCESS,
  PREDICT_DATA_FAIL,

  // For the history
  PREDICTION_HISTORY1,
  PREDICTION_HISTORY2,
  PREDICTION_HISTORY3,
  PREDICTION_HISTORY4,
  PREDICTION_HISTORY5,
  PREDICTION_HISTORY6,
  PREDICTION_HISTORY7,
} from "./types"

export const predictDataAction =
  (userDataHome, setLoadingNext) => async (dispatch) => {
    try {
      dispatch({ type: PREDICT_DATA_REQUEST })
      setLoadingNext(true)
      if (userDataHome["gender"] === "Female") {
        userDataHome["gender"] = 0
      } else if (userDataHome["gender"] === "Male") {
        userDataHome["gender"] = 1
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      const body = {
        age: userDataHome["age"],
        gender: userDataHome["gender"],
        spo2: userDataHome["SPO2"],
        bmi: userDataHome["bmi"],
        bp_dia: userDataHome["bp_dia"],
        bp_sys: userDataHome["bp_sys"],
        current_step: userDataHome["currentStep"],
        pulse_rate: userDataHome["pulse_rate"],
        temperature: userDataHome["temperature"],
      }

      const { data } = await axios.post(HOST + "predictions/", body, config)

      dispatch({
        type: PREDICT_DATA_SUCCESS,
        payload: data,
      })

      setLoadingNext(false)

      if (userDataHome["currentStep"] === 1) {
        dispatch({
          type: PREDICTION_HISTORY1,
          payload: data,
        })
      } else if (userDataHome["currentStep"] === 2) {
        dispatch({
          type: PREDICTION_HISTORY2,
          payload: data,
        })
      } else if (userDataHome["currentStep"] === 3) {
        dispatch({
          type: PREDICTION_HISTORY3,
          payload: data,
        })
      } else if (userDataHome["currentStep"] === 4) {
        dispatch({
          type: PREDICTION_HISTORY4,
          payload: data,
        })
      } else if (userDataHome["currentStep"] === 5) {
        dispatch({
          type: PREDICTION_HISTORY5,
          payload: data,
        })
      } else if (userDataHome["currentStep"] === 6) {
        dispatch({
          type: PREDICTION_HISTORY6,
          payload: data,
        })
      } else if (userDataHome["currentStep"] === 7) {
        dispatch({
          type: PREDICTION_HISTORY7,
          payload: data,
        })
      }
    } catch (error) {
      dispatch({
        type: PREDICT_DATA_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      })
      setLoadingNext(false)
    }
  }
