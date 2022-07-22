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
    } else {
      userDataHome["gender"] = 1
    }
    console.log("After modifying it : ", userDataHome)
    // const { data } = await axios.get(
    //   HOST + "general/daily_number_of_transactions/"
    // )
    const { data } = userDataHome
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
