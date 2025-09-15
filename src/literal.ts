// リテラル
// 特定の値そのものを型として扱う

let fruits:'いい' | '悪い';


// 関数の引数に特定の値のみを渡したいとき
const setTheme = (mode: 'light' | 'dark') => {
  console.log(`テーマを${mode}モードに設定しました。`);
};
setTheme('light')