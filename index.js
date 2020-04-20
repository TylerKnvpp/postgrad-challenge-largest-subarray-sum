let arr = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];

function largestSubarraySum(array) {
  let results = {
    trackingSum: 0,
    largestSum: 0,
  };

  for (let i = 0; i < array.length; i++) {
    results.trackingSum += array[i];

    if (results.trackingSum < 0) {
      results.trackingSum = 0;
    }

    if (results.largestSum < results.trackingSum) {
      results.largestSum = results.trackingSum;
    }
  }

  return results.largestSum;
}

console.log(largestSubarraySum(arr));
