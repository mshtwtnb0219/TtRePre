"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 関数
const greet = () => {
    console.log('こんにちは');
};
greet();
// 型注釈を用いた関数
// 戻り値を指定しない場合は型推論
const Cal = (price) => {
    return price + 123;
};
const cal2 = (price) => {
    return price + 123;
};
// 引数の省略
// 任意の場合は必ず条件分岐が必要
const cal3 = (price, name) => {
    return price;
};
//# sourceMappingURL=function.js.map