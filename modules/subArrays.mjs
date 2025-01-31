function splitArray(arr) {
  const result = [];
  let currentSubarray = [];

  for (const item of arr) {
    if (item === '<br>') {
      result.push(currentSubarray);
      currentSubarray = [];
    } else {
      currentSubarray.push(item);
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
}

export const subArrays = splitArray(linesArray);
