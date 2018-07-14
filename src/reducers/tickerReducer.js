import {
  FETCH_LAST_BTC_PRICE_SUCCESS,
  FETCH_LAST_BTC_PRICE_LOADING,
  FETCH_LAST_BTC_PRICE_ERROR,
  UPDATE_AMOUNT_TO_BUY,
  EXECUTE_TRADE,
  TRADE_ERROR
} from '../constants';
import { checkStringForOnlyNumbers, getBTCQuote } from '../utils';

const initialState = {
  loading: false,
  lastPrice: null,
  timestamp: null,
  amountToBuy: "",
  btcQuote: "",
  errorMsg: "",
  successMsg: ""
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case FETCH_LAST_BTC_PRICE_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_LAST_BTC_PRICE_SUCCESS:
      const { timestamp, lastPrice } = payload;
      return {
        ...state,
        lastPrice,
        timestamp,
        loading: false
      };
    case FETCH_LAST_BTC_PRICE_ERROR:
      return {
        ...state,
        errorMsg: "There was an error fetching price data. Please try again",
        loading: false
      };
    case UPDATE_AMOUNT_TO_BUY:
      // we check for only numbers in the string. I could have used a number input
      // But I wanted the placeholder to show when the value was 0. There's no way to do that with a numbered // input without some JS manipulation. This was a clear solution
      const { amountToBuy } = payload;
      const containsOnlyNumbers = checkStringForOnlyNumbers(amountToBuy);

      // If it's only numbers then we update the amount and the quoted price, else just return state
      if (containsOnlyNumbers) {
        const btcQuote = getBTCQuote(state.lastPrice, amountToBuy);
        return {
          ...state,
          amountToBuy,
          btcQuote,
          successMsg: "",
          errorMsg: ""
        };
      } else {
        return state;
      }
      case EXECUTE_TRADE:
        return {
          ...state,
          amountToBuy: "",
          btcQuote: "",
          successMsg: "Trade successfully completed"
        }
      case TRADE_ERROR:
        const { errorMsg } = payload;
        return {
          ...state,
          errorMsg
        }
    
    default:
      return state;
  }
}
