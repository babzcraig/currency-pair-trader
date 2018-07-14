import {
  FETCH_LAST_BTC_PRICE_SUCCESS,
  FETCH_LAST_BTC_PRICE_LOADING,
  FETCH_LAST_BTC_PRICE_ERROR
} from '../constants';

const initialState = {
  loading: false,
  lastPrice: null,
  timestamp: null,
  errorMsg: ""
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case FETCH_LAST_BTC_PRICE_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_LAST_BTC_PRICE_SUCCESS:
      const { timestamp, lastPrice } = payload;
      return {
        ...state,
        lastPrice,
        timestamp,
        loading: false
      }
    case FETCH_LAST_BTC_PRICE_ERROR:
      return {
        ...state,
        errorMsg: "There was an error fetching price data. Please try again",
        loading: false
      }
    default:
      return state;
  }
}
