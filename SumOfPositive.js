function positiveSum(arr) {
    var sumArr = [];
    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          sumArr.push(arr[i]);
        }
      }
      var sum = 0;
      for (var i = 0; i < sumArr.length; i++) {
        sum += sumArr[i];
      }
      return sum;
    } else return 0;
  }
  