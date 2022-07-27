import {
  PREDICT_DATA_REQUEST,
  PREDICT_DATA_SUCCESS,
  PREDICT_DATA_FAIL,

  // For the prediction history
  PREDICTION_HISTORY1,
  PREDICTION_HISTORY2,
  PREDICTION_HISTORY3,
  PREDICTION_HISTORY4,
  PREDICTION_HISTORY5,
  PREDICTION_HISTORY6,
  PREDICTION_HISTORY7,
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

export const predictionHistoryReducer1 = (
  state = { prediction_history1: [] },
  action
) => {
  switch (action.type) {
    case PREDICTION_HISTORY1:
      return {
        loading: false,
        prediction_history1: action.payload,
      }

    default:
      return state
  }
}

export const predictionHistoryReducer2 = (
  state = { prediction_history2: [] },
  action
) => {
  switch (action.type) {
    case PREDICTION_HISTORY2:
      return {
        loading: false,
        prediction_history2: action.payload,
      }

    default:
      return state
  }
}
export const predictionHistoryReducer3 = (
  state = { prediction_history3: [] },
  action
) => {
  switch (action.type) {
    case PREDICTION_HISTORY3:
      return {
        loading: false,
        prediction_history3: action.payload,
      }

    default:
      return state
  }
}

export const predictionHistoryReducer4 = (
  state = { prediction_history4: [] },
  action
) => {
  switch (action.type) {
    case PREDICTION_HISTORY4:
      return {
        loading: false,
        prediction_history4: action.payload,
      }

    default:
      return state
  }
}

export const predictionHistoryReducer5 = (
  state = { prediction_history5: [] },
  action
) => {
  switch (action.type) {
    case PREDICTION_HISTORY5:
      return {
        loading: false,
        prediction_history5: action.payload,
      }

    default:
      return state
  }
}

export const predictionHistoryReducer6 = (
  state = { prediction_history6: [] },
  action
) => {
  switch (action.type) {
    case PREDICTION_HISTORY6:
      return {
        loading: false,
        prediction_history6: action.payload,
      }

    default:
      return state
  }
}

export const predictionHistoryReducer7 = (
  state = { prediction_history7: [] },
  action
) => {
  switch (action.type) {
    case PREDICTION_HISTORY7:
      return {
        loading: false,
        prediction_history7: action.payload,
      }

    default:
      return state
  }
}
