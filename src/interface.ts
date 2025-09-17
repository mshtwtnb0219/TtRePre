// インターフェース
// オブジェクトがどんなプロパティを持っているかあらかじめ定義しておく

interface Shop {
    id: number;
    name: string;
    address: string;
    describe: () => void;
}

const shopA: Shop = {
    id: 1,
    name: 'あああ',
    address: 'a',
    describe(): void {
        console.log('日本全国どこへでもお届けします。');
    }
}

// implements　クラスにインターフェースを実装できる
class OnlineShop implements Shop {
    id: number = 1;
    name: string = 'SAMURAI オンライン店';
    address: string = '東京都';

    describe(): void {
        console.log('日本全国どこへでもお届けします。');
    }
}