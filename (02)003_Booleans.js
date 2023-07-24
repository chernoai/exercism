const knightIsAwake = true;
const archerIsAwake = false;
const prisonerIsAwake = false;
const petDogIsPresent = true;

function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}
console.log(canExecuteFastAttack(knightIsAwake));

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}
console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent) {
    // Caso en que Annalyn tiene a su perro
    return !archerIsAwake; // Solo puede rescatar al prisionero si el arquero está dormido
  } else {
    // Caso en que Annalyn no tiene a su perro
    if (!prisonerIsAwake) {
      // No puede rescatar al prisionero si el prisionero está durmiendo
      return false;
    } else {
      // Si el prisionero está despierto
      return !knightIsAwake && !archerIsAwake; // Solo puede rescatar al prisionero si el caballero y el arquero están dormidos
    }
  }
}
console.log(
  canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  )
);
