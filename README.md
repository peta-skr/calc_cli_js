# calc_cli_js

ターミナルで対話的に四則演算をするNode.jsの小さなCLI。最初は `add 1 2` のように2つの数を渡し（結果は `3`）、2回目からは `mul 4` のように1つの数を渡すと、直前の結果に続けて計算する（結果は `12`）。

使えるコマンドは `add` `sub` `mul` `div` `clear`（結果を0に戻して画面を消す）`exit`。引数の数が合わないときや数でないものを渡したときはメッセージを出し、それまでの結果は変えない。

## 動かし方

Node.jsが必要（`node:readline/promises` を使うので17以降）。依存パッケージは無い。

```sh
node .
```

## 使った技術

- Node.js（CommonJS）、`node:readline/promises` による入力待ち
- 演算ごとに `cmd/` のファイルを分け、引数の数と数値かどうかの確認は `cmd/check.js` にまとめた

## 学んだこと

- `readline/promises` の `question` を `await` で待ち、入力を繰り返し受け付けるループの書き方
