exports.min = function min (array) {
  let min = 0;
  
  if (!array || array.length === 0) return 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }

  return min;
}

exports.max = function max (array) {
  let max = 0;

  if (!array || array.length === 0) return 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  
  return max;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;

  let avg = array.reduce((sum, current) => sum + current, 0) / array.length;
  return avg;
}
