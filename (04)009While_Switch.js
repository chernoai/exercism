//todo: EXPLANATION
/*let a = 10;
let x = 8;
let day = 3;
let nomberDay;
while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}
do {
  a++;
  if (a === 11) {
    continue;
  }
  console.log(a); // it's 11 but it continues
} while (a < 5);
switch (day) {
  case 1:
    nomberDay = "Monday";
    break;
  case 2:
    nomberDay = "Tuesday";
    break;
  default:
    nomberDay = "Invalid day";
    break;
}
console.log(nombreDia);*/

//todo: EXERCISE
export function timeToMixJuice(name) {
  let minutes = 0;

  switch (name) {
    case "Pure Strawberry Joy":
      minutes = 0.5;
      break;
    case "Energizer":
      minutes = 1.5;
      break;
    case "Green Garden":
      minutes = 1.5;
      break;
    case "Tropical Island":
      minutes = 3;
      break;
    case "All or Nothing":
      minutes = 5;
      break;
    default:
      minutes = 2.5;
      break;
  }

  return minutes;
}
console.log(
  timeToMixJuice("Tropical Island"),
  timeToMixJuice("Berries & Lime")
);

export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let limesNeed = 0;

  while (i < limes.length) {
    if (wedgesNeeded == 0) {
      break;
    }
    switch (limes[i]) {
      case "small":
        wedgesNeeded -= 6;
        limesNeed++;
        break;
      case "medium":
        wedgesNeeded -= 8;
        limesNeed++;
        break;
      case "large":
        wedgesNeeded -= 10;
        limesNeed++;
        break;
    }
    if (wedgesNeeded <= 0) {
      break;
    }
    i++;
  }

  return limesNeed;
}
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));

const orders = [
  "Pure Strawberry Joy",
  "Pure Strawberry Joy",
  "Vitality",
  "Tropical Island",
  "All or Nothing",
  "All or Nothing",
  "All or Nothing",
  "Green Garden",
  "Limetime",
];

export function remainingOrders(timeLeft, orders) {
  let i = 0;

  if (timeLeft > 0) {
    do {
      switch (orders[i]) {
        case "Pure Strawberry Joy":
          console.log(timeLeft);
          timeLeft -= 0.5;
          orders.shift();
          console.log(timeLeft);
          break;
        case "Energizer":
          console.log(timeLeft);
          timeLeft -= 1.5;
          orders.shift();
          console.log(timeLeft);
          break;
        case "Green Garden":
          console.log(timeLeft);
          timeLeft -= 1.5;
          orders.shift();
          console.log(timeLeft);
          break;
        case "Tropical Island":
          console.log(timeLeft);
          timeLeft -= 3;
          orders.shift();
          console.log(timeLeft);
          break;
        case "All or Nothing":
          console.log(timeLeft);
          timeLeft -= 5;
          orders.shift();
          console.log(timeLeft);
          break;
        default:
          console.log(timeLeft);
          timeLeft -= 2.5;
          orders.shift();
          console.log(timeLeft);
          break;
      }
      console.log(timeLeft);
    } while (i < timeLeft);
    if (timeLeft > 0) {
      orders.shift();
    }
  }
  console.log(timeLeft+" | "+i);
  return orders;
}

console.log(remainingOrders(13, orders));
