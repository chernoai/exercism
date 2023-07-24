export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}
console.log(buildSign("Birthday", "Rob"));

export function buildBirthdaySign(age) {
  return `Happy Birthday! ${
    age >= 50 ? "What a mature fellow you are." : "What a young fellow you are."
  }`;
}
console.log(buildBirthdaySign(50));
console.log(buildBirthdaySign(45));

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}
console.log(graduationFor("Hannah", 2022));

export function costOf(sign, currency) {
  let cost = sign.length * 2.0 + 20;
  console.log(cost);
  return `Your sign costs ${cost}.00 ${currency}.`;
}
console.log(costOf("Happy Birthday Rob!", "dollars"));
