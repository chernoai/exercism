export function translate2d(dx, dy) {
  console.log(dx, dy);
  return function moveCoordinatesRight2Px(x, y) {
    console.log(x, y);
    return [dx + x, dy + y];
  };
}

export function scale2d(sx, sy) {
  return function doubleScale(x, y) {
    return [sx * x, sy * y];
  };
}

export function composeTransform(f, g) {
  return function (x, y) {
    const [x1, y1] = f(x, y);
    const [x2, y2] = g(x1, y1);
    return [x2, y2];
  };
}

export function memoizeTransform(fn) {
  let lastArgs, lastResult;
  return function (...args) {
    if (lastArgs && JSON.stringify(lastArgs) === JSON.stringify(args)) {
      return lastResult;
    }
    const result = fn.apply(this, args);
    lastArgs = args;
    lastResult = result;
    return result;
  };
}
