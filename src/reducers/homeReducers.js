import {
  PREDICT_DATA_REQUEST,
  PREDICT_DATA_SUCCESS,
  PREDICT_DATA_FAIL,
} from "../actions/types"
export const predictDataReducer = (
  state = { predict_data_reducer: [] },
  action
) => {
  switch (action.type) {
    case PREDICT_DATA_REQUEST:
      return { loading: true, error: false, predict_data_reducer: [] }

    case PREDICT_DATA_SUCCESS:
      return {
        loading: false,
        predict_data_reducer: action.payload,
      }

    case PREDICT_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
