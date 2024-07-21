#!/usr/bin/env node

const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const { add, addFirst } = require("./cmd/add");
const { sub } = require("./cmd/sub");
const { div } = require("./cmd/div");
const { mul } = require("./cmd/mul");
async function main() {
  // console.clear();

  let flag = true;
  let first = true; //最初かどうか
  let curr = 0; // 現在の計算結果を保持
  const rl = readline.createInterface({ input, output });

  while (flag) {
    const response = await rl.question("> ");
    let arr = response.split(/\s+/);
    let result;

    switch (arr[0]) {
      case "exit":
        flag = false;
        break;
      case "add":
        result = add(arr, curr, first);
        if (!isNaN(result)) {
          first = false;
          curr = result;
        }

        console.log(result);
        break;
      case "sub":
        result = sub(arr, curr, first);
        if (!isNaN(result)) {
          first = false;
          curr = result;
        }

        console.log(result);
        break;
      case "div":
        result = div(arr, curr, first);
        if (!isNaN(result)) {
          first = false;
          curr = result;
        }

        console.log(result);
        break;
      case "mul":
        result = mul(arr, curr, first);
        if (!isNaN(result)) {
          first = false;
          curr = result;
        }

        console.log(result);
        break;
      case "clear":
        first = true;
        console.clear();
        curr = 0;
        result = 0;
        break;
      default:
        console.log("使用できないコマンドです");
    }

    console.log(response);
  }

  rl.close();
}

main();
