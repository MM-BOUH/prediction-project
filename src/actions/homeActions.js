import axios from "axios"
import {
  HOST,
  DAILY_TRANSACTION_NUMBER_REQUEST,
  DAILY_TRANSACTION_NUMBER_SUCCESS,
  DAILY_TRANSACTION_NUMBER_FAIL,
} from "./types"

export const dailyTransactionNumber = () => async (dispatch) => {
  try {
    dispatch({ type: DAILY_TRANSACTION_NUMBER_REQUEST })
    const { data } = await axios.get(
      HOST + "general/daily_number_of_transactions/"
    )

    dispatch({
      type: DAILY_TRANSACTION_NUMBER_SUCCESS,
      payload: data,
    })
    console.log("This is the daily transaction statistics", data)
  } catch (error) {
    dispatch({
      type: DAILY_TRANSACTION_NUMBER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    })
  }
}
