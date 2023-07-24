const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
console.log(remainingMinutesInOven(10));

function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}
console.log(preparationTimeInMinutes(8));

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const preparationTime = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
  return preparationTime + actualMinutesInOven;
}
console.log(totalTimeInMinutes(preparationTimeInMinutes(8), 10));
