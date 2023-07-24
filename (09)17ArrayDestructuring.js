/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
const deck = [5, 9, 7, 1, 8];
export function getFirstCard(deck) {
  const [uno, ...rest] = deck;
  return uno
}
console.log(getFirstCard(deck));

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const [uno, dos, ...rest] = deck
  return dos
}
console.log(getSecondCard(deck));

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {

  let [one, two, ...rest] = deck
  return [two, one, ...rest]
}
console.log(swapTopTwoCards(deck));
/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  const [uno, ...rest] = deck
  return [uno, rest]
}
console.log(discardTopCard(deck));
/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  const [uno, ...rest] = deck
  let result = [uno, ...FACE_CARDS, ...rest]
  return result
}
console.log(insertFaceCards(deck));
