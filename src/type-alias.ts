// 型エイリアス
// オブジェクトの型にUserという名前を付ける

type User = {
    name: string;
    age: number
}


const fruits: User = {
    name: "りんご",
    age: 123
}

fruits.name = "ばなな"
console.log(fruits)