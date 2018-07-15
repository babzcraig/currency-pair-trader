import { 
  EXECUTE_TRADE,
  TRADE_ERROR
} from '../constants';

const initialState = {
  user: {
    firstName: "Babs",
    lastName: "Craig",
    usdBalance: 156.12,
    btcBalance: 0
  }
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case EXECUTE_TRADE:
      const { 
        usdAmountToBuy,
        btcAmountToBuy
      } = payload;
      const updatedUSDBalance = Number((state.user.usdBalance - usdAmountToBuy).toFixed(2));
      const updatedBTCBalance = Number((state.user.btcBalance + btcAmountToBuy).toFixed(8));

      const user = {
        ...state.user,
        btcBalance: updatedBTCBalance,
        usdBalance: updatedUSDBalance
      }
    return {
      ...state,
      user
      
    }

    default:
      return state;
  }
}
