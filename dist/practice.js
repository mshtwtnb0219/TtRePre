"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 分割代入
const numbers = [1, 2, 4];
// 配列の1番目と2番目の要素を分割代入
const [item, item2] = numbers;
console.log(item);
console.log(item2);
// スプレット構文
// 参照渡し
const orArray = [1, 2, 3];
// 配列の参照をコピー
const refArray = orArray;
orArray.push(4);
console.log(orArray);
console.log(refArray);
// スプレッド構文によるコピー(値渡し)
const orgArray = [1, 2, 3];
// スプレッド構文で配列の値をコピー
const copyArray = [...orgArray, 5];
// 元の配列に要素を追加
orgArray.push(4);
console.log(orgArray);
console.log(copyArray);
// 三項演算子
// if文を一行で表現ができる
const coin = Math.random() < 0.5 ? '表' : '裏';
console.log(coin);
// テンプレートリテラル
console.log(`aaaaaa,${numbers}`);
//# sourceMappingURL=practice.js.map