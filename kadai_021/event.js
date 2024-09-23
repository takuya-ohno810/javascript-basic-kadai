//idがtextのHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//idがbtnのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//ボタンをクリックした時にイベント処理を実行する
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});