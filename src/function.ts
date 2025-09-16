// 関数
const greet = () => {
    console.log('こんにちは')
}

greet();

// 型注釈を用いた関数
// 戻り値を指定しない場合は型推論
const Cal = (price: number):number => {
    return price + 123;
}

// あらかじめ型エイリアスを使って関数の型に別名をつける
type CalculateTotal  = (price2: number) => number;

const cal2: CalculateTotal = (price) => {
    return price + 123;
}

// 引数の省略
// 任意の場合は必ず条件分岐が必要
const cal3 = (price: number, name?: string):number => {
    return price;
}