// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
const card = 2;
const stack = [9, 7, 3, 2]
export function getCardPosition(stack, card) {
  return stack.indexOf(card)

}
console.log(getCardPosition(stack, card));
/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  return stack.includes(card)
}
console.log(doesStackIncludeCard(stack, card));

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  return stack.every(num => num % 2 == 0)
}
console.log(isEachCardEven(stack));

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  return stack.some(num => num % 2 !== 0)
}
console.log(doesStackIncludeOddCard(stack));

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
export function getFirstOddCard(stack) {
  return stack.find(num => num % 2 !== 0)

}
console.log(getFirstOddCard(stack));
/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  let i = stack.findIndex(num => num % 2 == 0)
  return i
}
console.log(getFirstEvenCardPosition(stack));
