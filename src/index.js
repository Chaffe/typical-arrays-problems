exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  
  let min = array[0];
  for (let element of array) {
    if (element < min) {
      min = element
    }
  }

  return min;
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;

  let max = array[0];
  for (let element of array) {
    if (element > max) {
      max = element
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;

  return array.reduce((sum, current) => sum + current, 0) / array.length;
}
