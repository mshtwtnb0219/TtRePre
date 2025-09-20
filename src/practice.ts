// 分割代入
const numbers: number[] = [1, 2, 4];
// 配列の1番目と2番目の要素を分割代入
const [item, item2] = numbers;
console.log(item)
console.log(item2)

// スプレット構文
// 参照渡し
const orArray: number[] = [1, 2, 3];
// 配列の参照をコピー
const refArray = orArray;
orArray.push(4)
console.log(orArray)
console.log(refArray)

// スプレッド構文によるコピー(値渡し)
const orgArray: number[] = [1, 2, 3];
// スプレッド構文で配列の値をコピー
const copyArray: number[] = [...orgArray, 5]
// 元の配列に要素を追加
orgArray.push(4)
console.log(orgArray)
console.log(copyArray)

// 三項演算子
// if文を一行で表現ができる
const coin: string = Math.random() < 0.5 ? '表' : '裏'
console.log(coin)

// テンプレートリテラル
console.log(`aaaaaa,${numbers}`);

// オプショナルチェーン
// 要素が存在しない場合のエラーを回避する
// 式 ?? 'nullだった場合のメッセージ'
const dog1 = { name: 'ぽち', age: 12 };
const dog2  = null;
console.log(dog1?.name ?? 'nullです')
