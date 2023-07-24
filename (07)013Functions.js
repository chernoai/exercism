const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
const friendsList = ["sauce", "noodles", "béchamel", "mozzarella", "mustard"];
const myList = ["sauce", "noodles", "tomatoes"];
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

export function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasagna is done.";
  }
  if (timer > 0) {
    return "Not done, please wait.";
  }
  return "You forgot to set the timer.";
}
console.log(cookingStatus(8));

export function preparationTime(layers, timePerLayer) {
  return timePerLayer == undefined
    ? 2 * layers.length
    : timePerLayer * layers.length;
}
console.log(preparationTime(layers, 3));

export function quantities(layers) {
  let noodles = layers.filter((e, i, a) => {
    return e == "noodles";
  });
  let sauce = layers.filter((e, i, a) => {
    return e == "sauce";
  });

  return { noodles: noodles.length * 50, sauce: sauce.length * 0.2 };
}
console.log(quantities(layers));

export function addSecretIngredient(friendsList, myList) {
  let i = friendsList.length - 1;
  let mylist2 = myList;

  mylist2.push(friendsList[i]);

  return mylist2;
}
console.log(addSecretIngredient(friendsList, myList));

export function scaleRecipe(recipe, portions) {
  portions = portions / 2;
  let newRecipe = {};
  for (const key in recipe) {
    newRecipe[key] = recipe[key] * portions;
  }
  return newRecipe;
}
console.log(scaleRecipe(recipe, 4));
