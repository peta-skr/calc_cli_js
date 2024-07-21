const { check } = require("./check");

function mul(arr, curr, flag) {
  let res;
  if (flag) {
    res = mulFirst(arr);
  } else {
    res = mulSecond(arr, curr);
  }

  return res;
}

function mulFirst(arr) {
  let checkResult = check(arr, 3);
  if (checkResult[0] == false) return checkResult[1];

  return Number(arr[1]) * Number(arr[2]);
}

function mulSecond(arr, curr) {
  let checkResult = check(arr, 2);
  if (checkResult[0] == false) return checkResult[1];

  return curr * Number(arr[1]);
}

exports.mul = mul;
