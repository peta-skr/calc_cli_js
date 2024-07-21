const { check } = require("./check");

function sub(arr, curr, flag) {
  let res;
  if (flag) {
    res = subFirst(arr);
  } else {
    res = subSecond(arr, curr);
  }

  return res;
}

function subFirst(arr) {
  let checkResult = check(arr, 3);
  if (checkResult[0] == false) return checkResult[1];

  return Number(arr[1]) - Number(arr[2]);
}

function subSecond(arr, curr) {
  let checkResult = check(arr, 2);
  if (checkResult[0] == false) return checkResult[1];

  return curr - Number(arr[1]);
}

exports.sub = sub;
