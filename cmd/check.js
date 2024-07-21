function check(arr, len) {
  // 配列の数が正しいか
  if (arr.length != len) {
    return [
      false,
      `渡す数字の数が間違っています。${len - 1}個渡してください。`,
    ];
  }

  // すべて数字か
  for (let i = 1; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return [false, "数字を入力してください"];
    }
  }

  return [true, "OK"];
}

exports.check = check;
