const position = 2;
const replacementCard = 6;
const newCard = 8;
const stackSize = 4;

function getItem(cards, position) {
  let a = cards[position];
  return a;
}
console.log(getItem([1, 2, 4, 1], position));

function setItem(cards, position, replacementCard) {
  // a IS 'position' because the splice() method returns the elements eliminated in array as an array
  if (position === 0) {
    let a = cards.splice(position, position + 1, replacementCard);
  } else {
    let a = cards.splice(position, 1, replacementCard);
  }
  return cards;
}
console.log(setItem([1, 2, 4, 1], position, replacementCard));

function insertItemAtTop(cards, newCard) {
  // a newCard IS  because the push() method returns the elements pushed in array as an array
  let a = cards.push(newCard);
  return cards;
}
console.log(insertItemAtTop([5, 9, 7, 1], newCard));

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}
console.log(removeItem([3, 2, 6, 4, 8], position));

function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}
console.log(removeItemFromTop([3, 2, 6, 4, 8]));

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}
console.log(insertItemAtBottom([5, 9, 7, 1], newCard));

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}
console.log(removeItemAtBottom([8, 5, 9, 7, 1]));

function checkSizeOfStack(cards, stackSize) {
  return cards.length == stackSize
}
console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));
