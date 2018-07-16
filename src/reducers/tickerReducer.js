import {
  FETCH_LAST_BTC_PRICE_SUCCESS,
  FETCH_LAST_BTC_PRICE_LOADING,
  FETCH_LAST_BTC_PRICE_ERROR,
  UPDATE_AMOUNT_TO_BUY,
  EXECUTE_TRADE,
  TRADE_ERROR
} from "../constants";
import { checkStringForOnlyNumbers, getBTCQuote } from "../utils";

const initialState = {
  loading: false,
  lastPrice: null,
  timestamp: null,
  loadCount: 0,
  amountToBuy: "",
  btcQuote: "",
  errorMsg: "",
  successMsg: "",
  warningMsg: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_LAST_BTC_PRICE_LOADING:
      return {
        ...state,
        loading: true,
        // We use this to determine the kind of loader to render
        loadCount: state.loadCount + 1
      };
    case FETCH_LAST_BTC_PRICE_SUCCESS:
      const { timestamp, lastPrice } = payload;
      // if there is an amountToBuy we need to calculate the new btcQuote
      // and display it
      if (state.amountToBuy) {
        const btcQuote = getBTCQuote(lastPrice, state.amountToBuy);
        // If the quote changes, let us tell our user
        const warningMsg =
          btcQuote != state.btcQuote && !state.warningMsg
            ? "The price of BTC just changed. Please confirm before proceeding with a trade"
            : "";
        return {
          ...state,
          lastPrice,
          timestamp,
          btcQuote,
          loading: false,
          successMsg: "",
          errorMsg: "",
          warningMsg: state.warningMsg || warningMsg
        };
      }
      // if not we just return the lastPrice data
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
          errorMsg: "",
          warningMsg: ""
        };
      } else {
        return state;
      }
    case EXECUTE_TRADE:
      return {
        ...state,
        amountToBuy: "",
        btcQuote: "",
        errorMsg: "",
        warningMsg: "",
        successMsg: "Trade successfully completed"
      };
    case TRADE_ERROR:
      const { errorMsg } = payload;
      return {
        ...state,
        errorMsg,
        successMsg: "",
        warningMsg: ""
      };

    default:
      return state;
  }
}
