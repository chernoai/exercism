function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}
console.log(needsLicense("car"));
function chooseVehicle(option1, option2) {
  let betterOption;
  if (option1 < option2) {
    betterOption = option1;
  } else {
    betterOption = option2;
  }
  return `${betterOption} is clearly the better choice.`;
}
console.log(chooseVehicle("Wuling Hongguang", "Toyota Corolla"));

function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    originalPrice *= 0.8;
  } else if (age <= 10) {
    originalPrice *= 0.7;
  } else {
    originalPrice *= 0.5;
  }
  return originalPrice;
}
console.log(calculateResellPrice(25000, 10));
