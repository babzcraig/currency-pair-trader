import axios from 'axios';
import {
  BTC_API_URL,
  FETCH_LAST_BTC_PRICE_SUCCESS,
  FETCH_LAST_BTC_PRICE_LOADING,
  FETCH_LAST_BTC_PRICE_ERROR
} from '../constants';

export function fetchLastBTCPrice() {
  return async dispatch => {
    // start loading
    dispatch({
      type: FETCH_LAST_BTC_PRICE_LOADING
    });

    try {
      const {data} = await axios.get(BTC_API_URL);
      // The Bitfinix API provides the last price on the 6th element of the returned
      // data array object
      const lastPrice = data[6];
      const timestamp = Date.now();
      dispatch({
        type: FETCH_LAST_BTC_PRICE_SUCCESS,
        payload: {
          lastPrice,
          timestamp
        }
      });
    } catch(error) {
      // Log error to the console and dispatch the error to the reducer
      console.log(error);
      dispatch({
        type: FETCH_LAST_BTC_PRICE_ERROR,
        payload: {
          error
        }
      })
    }
  }
}


