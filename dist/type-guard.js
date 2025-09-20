"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 型ガード
// 型ガードの方法	説明
// typeof演算子	対象の型名を文字列で返す。
// instanceof演算子	対象が「特定のクラスのインスタンスかどうか」を判定する。
// in演算子	対象のオブジェクトが「特定のプロパティを持っているかどうか」を判定する。
// ユーザー定義の型ガード関数	型ガード用の関数を自分で定義し、その関数を使ってより複雑な判定を行う
const val = (value) => {
    if (typeof value === 'string') {
        return 'aa';
    }
    else {
        return 'q';
    }
};
// instanceof演算子
class masa {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
// masaクラスのインスタンスかを判定する
const getA = (abc) => {
    if (abc instanceof masa) {
        return 'a';
    }
    return 'a';
};
//# sourceMappingURL=type-guard.js.map