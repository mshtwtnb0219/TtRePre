// ユーティリティクラス
// 代表的なユーティリティ型	説明
// Partial<T>	型Tのプロパティをすべてオプションプロパティにする。
// Required<T>	型Tのプロパティをすべて必須にする。
// Readonly<T>	型Tのプロパティをすべて読み取り専用にする。
// Pick<T, K>	Kに指定したキーのみを型Tから抜き出す。
// Omit<T, K>	Kに指定したキーを型Tから除外する。

type Task = {
    id: number;
    title: string;
    description?: string;
    flg: boolean;
}
type PartialTask = Partial<Task>;
