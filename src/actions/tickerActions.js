import axios from "axios";
import {
  BTC_API_URL,
  FETCH_LAST_BTC_PRICE_SUCCESS,
  FETCH_LAST_BTC_PRICE_LOADING,
  FETCH_LAST_BTC_PRICE_ERROR,
  UPDATE_AMOUNT_TO_BUY,
  TRADE_ERROR,
  EXECUTE_TRADE
} from "../constants";

export function updateAmountToBuy(amountToBuy) {
  return {
    type: UPDATE_AMOUNT_TO_BUY,
    payload: {
      amountToBuy
    }
  };
}

export function tradeUSDForBTC({ usdAmountToBuy, usdBalance, btcAmountToBuy }) {
  return dispatch => {
    // First ensure user has enough to make the trade
    if (usdAmountToBuy > usdBalance) {
      return dispatch({
        type: TRADE_ERROR,
        payload: {
          errorMsg: "You have insufficient funds to make this trade"
        }
      });
    }

    dispatch({
      type: EXECUTE_TRADE,
      payload: {
        usdAmountToBuy,
        btcAmountToBuy
      }
    });
  };
}

export function fetchLastBTCPrice() {
  return async dispatch => {
    // start loading
    dispatch({
      type: FETCH_LAST_BTC_PRICE_LOADING
    });

    try {
      const { data } = await axios.get(BTC_API_URL);
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
    } catch (error) {
      // Log error to the console and dispatch the error to the reducer
      console.log(error);
      dispatch({
        type: FETCH_LAST_BTC_PRICE_ERROR,
        payload: {
          error
        }
      });
    }
  };
}
