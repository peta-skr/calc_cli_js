const { check } = require("./check");

function add(arr, curr, flag) {
  let res;
  if (flag) {
    res = addFirst(arr);
  } else {
    res = addSecond(arr, curr);
  }

  return res;
}

function addFirst(arr) {
  let checkResult = check(arr, 3);
  if (checkResult[0] == false) return checkResult[1];

  return Number(arr[1]) + Number(arr[2]);
}

function addSecond(arr, curr) {
  let checkResult = check(arr, 2);
  if (checkResult[0] == false) return checkResult[1];

  return curr + Number(arr[1]);
}

exports.add = add;
