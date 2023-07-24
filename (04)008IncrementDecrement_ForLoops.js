function totalBirdCount(birdsPerDay) {
  let a = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    a += birdsPerDay[i];
  }
  return a;
}
console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));

function birdsInWeek(birdsPerDay, week) {
  let a = birdsPerDay.splice(7 * (week - 1), 7);
  console.log(a);
  let b = 0;
  for (let i = 0; i < a.length; i++) {
    b += a[i];
    console.log(b);
  }
  return b;
}
console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2));

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdsPerDay[i++] += 1;
  }
  return birdsPerDay;
}
console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));
