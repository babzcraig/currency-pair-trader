// import { } from '../actions/types';

const initialState = {
  user: {
    firstName: "Babs",
    lastName: "Craig",
    usdBalance: 156.12,
    btcBalance: 0
  }
}

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
