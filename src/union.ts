// ユニオン型
// 複数の型のうちいずれか一つに一致していればOK

let userId: string | number;
userId = 123
userId = 'aa'

// インターセクション型
// 複数の型を満たす必要がある
type Title = {title:string;}
type Price = {price:number;}

// Title型とPrice型を満たす
type Book = Title & Price;

const book: Book = {
    title: "本",
    price: 123
}