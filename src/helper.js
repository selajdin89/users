export function getLastDigit(number) {
  return parseInt(number % 10, 10);
}

export function isLastDigitZero(number) {
  const lastDigit = number % 10;
  return lastDigit === 0;
}
