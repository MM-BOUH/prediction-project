import axios from "axios"
import {
  HOST,
  PREDICT_DATA_REQUEST,
  PREDICT_DATA_SUCCESS,
  PREDICT_DATA_FAIL,
} from "./types"

export const predictDataAction = (userDataHome) => async (dispatch) => {
  try {
    dispatch({ type: PREDICT_DATA_REQUEST })
    if (userDataHome["gender"] === "Female") {
      userDataHome["gender"] = 0
    } else if (userDataHome["gender"] === "Male") {
      userDataHome["gender"] = 1
    }
    console.log("User data home", userDataHome)
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
  } catch (error) {
    dispatch({
      type: PREDICT_DATA_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    })
  }
}
