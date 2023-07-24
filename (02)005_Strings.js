const SUMMER = [
  "Sunshine warming my toes,",
  "Underwater fun with my friends.",
  "Making homemade ice cream on the porch,",
  "Many long nights catching fireflies.",
  "Early morning walks to the creek,",
  "Reveling in the freedom of lazy days.",
];
const CODE_WORK = [
  "Compilers intensily bestow",
  "On commencing without ego",
  "Different processes ajar",
  "Exit with zero quick",
];
const SHIRE_HORSE_WITH_SPACES = [
  "Stands so high   ",
  "\tHuge hooves too\t",
  "Impatiently waits for \t \t",
  "    Reins and harness    ",
  "Eager to leave\n\n",
];

function frontDoorResponse(line) {
  let a = line[0].toUpperCase();
  return a;
}
console.log(frontDoorResponse(SUMMER[0]));

function frontDoorPassword(word) {
  let a = word.slice(1);
  let b = a.toLowerCase();
  let c = word[0].toUpperCase();
  let d = `${c}${b}`;
  return d;
}
console.log(frontDoorPassword(frontDoorResponse(SUMMER)));

function backDoorResponse(line) {
  let a = line.trim();
  let b = a[a.length - 1];
  return b;
}
console.log(backDoorResponse(CODE_WORK[0]));

function backDoorPassword(word) {
  let a = word.slice(1);
  let b = a.toLowerCase();
  let c = word[0].toUpperCase();
  let d = `${c}${b.trim()}`;
  let e = `${d}, please`;
  return e;
}
console.log(backDoorPassword(SHIRE_HORSE_WITH_SPACES[0]));
