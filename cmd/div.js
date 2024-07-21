const { check } = require("./check");

function div(arr, curr, flag) {
  let res;
  if (flag) {
    res = divFirst(arr);
  } else {
    res = divSecond(arr, curr);
  }

  return res;
}

function divFirst(arr) {
  let checkResult = check(arr, 3);
  if (checkResult[0] == false) return checkResult[1];

  return Number(arr[1]) / Number(arr[2]);
}

function divSecond(arr, curr) {
  let checkResult = check(arr, 2);
  if (checkResult[0] == false) return checkResult[1];

  return curr / Number(arr[1]);
}

exports.div = div;
