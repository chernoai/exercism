//todo: EXPLANATION
const myObject = {
  nombre: "Cherno",
  numer8: 20,
  boolean: true,
  "{$pecial}": "@!£$%^&*",
  arry: [26, 08, 2002],
  function: function (a, b) {
    return a + b;
  },
  subObj: {
    nombre: "Cherno",
    edad: 20,
  },
};
const llamadaCorchetes = "nombre";
console.log(myObject.function(2, 2)); // 4
console.log(myObject["{$pecial}"]); // @!£$%^&*
console.log(myObject[llamadaCorchetes]); // Cherno

myObject.nombre = "Malik";
console.log(myObject.nombre); // Malik
console.log(myObject["{$pecial}"]);
myObject["{$pecial}"] = "Normal";
myObject[llamadaCorchetes] = "Embalo";
console.log(myObject.nombre); // Embalo

console.log(myObject["{$pecial}"]);
delete myObject["{$pecial}"];
console.log(myObject.hasOwnProperty(["{$pecial}"]));

for (let key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}

//todo EXERCISE
const scoreBoard = {
  "Amil Pastorius": 345,
  "Min-seo Shin": 19,
  "Jesse Johnson": 122,
};

export function createScoreBoard() {
  const myObject = {
    "The Best Ever": 1000000,
  };
  return myObject;
}
console.log(createScoreBoard());

export function addPlayer(scoreBoard, playerName, score) {
  scoreBoard[playerName] = score;
  return scoreBoard;
}
console.log(addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373));

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}
console.log(removePlayer({ "Dave Thomas": 0 }, "Dave Thomas"));

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}
console.log(updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73));

export function applyMondayBonus(scoreBoard) {
  for (const key in scoreBoard) {
    if (Object.hasOwnProperty.call(scoreBoard, key)) {
      //El método .call() es una función en JavaScript que se utiliza para establecer explícitamente el valor de this dentro de una función y para pasar argumentos a la función. this no es un objeto en sí mismo, sino una referencia al objeto actual en el contexto de ejecución de la función
      scoreBoard[key] += 100;
    }
  }
  return scoreBoard;
}
console.log(applyMondayBonus(scoreBoard));

function normalizeScore(params) {
  const score = params.score;
  const normalizeFunction = params.normalizeFunction;
  const normalizedScore = normalizeFunction(score);
  return normalizedScore;
}

function normalize(score) {
  return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };
const normalizedScore = normalizeScore(params);
console.log(normalizedScore);
