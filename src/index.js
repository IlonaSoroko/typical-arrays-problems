
exports.min = function min(array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  return Math.min.apply(0, array);
}

exports.max = function max(array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  return Math.max.apply(0, array);
}

exports.avg = function avg(array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
