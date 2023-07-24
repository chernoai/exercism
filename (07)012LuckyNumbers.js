export function twoSum(array1, array2) {
  array1 = Number(String(array1).split(",").join(""));
  array2 = Number(String(array2).split(",").join(""));
  return array1 + array2;
}
console.log(twoSum([1, 2, 3], [0, 7]));

export function luckyNumber(value) {
  value = String(value);
  let valueArr = [];
  for (let i = 0; i < value.length; i++) {
    valueArr.push(value[i]);
  }
  valueArr = String(valueArr.reverse()).split(",").join("");
  return valueArr == String(value);
}
console.log(luckyNumber(1441), luckyNumber(123));

export function errorMessage(input) {
  input = String(input);

  if ((input == "") | (input == "undefined") | (input == "null")) {
    return "Required field";
  } else if (isNaN(input) || input == 0) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}

console.log(errorMessage("123"), errorMessage(""), errorMessage("abc"));
