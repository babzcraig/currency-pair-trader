export function checkStringForOnlyNumbers(string) {
  // Skip the check on an empty this allows user return to an empty input
  if (!string.length) return true;
  const regex = /^\d+$/;
  return regex.test(string);
}

export function getBTCQuote(lastBTCPrice, amountToBuy) {
  if (!amountToBuy) return "";
  const usdAmount = Number(amountToBuy);
  const BTCAmount =  usdAmount / lastBTCPrice;
  //Return a string representaiont rounded to 8 digits as per the design
  return BTCAmount.toFixed(8);
}