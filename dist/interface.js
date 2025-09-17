"use strict";
// インターフェース
// オブジェクトがどんなプロパティを持っているかあらかじめ定義しておく
Object.defineProperty(exports, "__esModule", { value: true });
const shopA = {
    id: 1,
    name: 'あああ',
    address: 'a',
    describe() {
        console.log('日本全国どこへでもお届けします。');
    }
};
// implements　クラスにインターフェースを実装できる
class OnlineShop {
    id = 1;
    name = 'SAMURAI オンライン店';
    address = '東京都';
    describe() {
        console.log('日本全国どこへでもお届けします。');
    }
}
//# sourceMappingURL=interface.js.map