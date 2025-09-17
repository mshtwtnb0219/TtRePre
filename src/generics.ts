// ジェネリクス
const echo = <T>(value: T): T => {
    return value;
}

// ジェネリクスを使った関数を呼び出す
echo<string>('あああ')
echo<number>(123) 