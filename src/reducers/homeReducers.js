import {
  DAILY_TRANSACTION_NUMBER_REQUEST,
  DAILY_TRANSACTION_NUMBER_SUCCESS,
  DAILY_TRANSACTION_NUMBER_FAIL,
} from "../actions/types"
export const transactionNumberReducer = (
  state = { daily_transaction_number: [] },
  action
) => {
  switch (action.type) {
    case DAILY_TRANSACTION_NUMBER_REQUEST:
      return { loading: true, error: false, daily_transaction_number: [] }

    case DAILY_TRANSACTION_NUMBER_SUCCESS:
      return {
        loading: false,
        daily_transaction_number: action.payload,
      }

    case DAILY_TRANSACTION_NUMBER_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
