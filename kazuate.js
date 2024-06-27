// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = Math.floor(Math.random()*10) + 1;

  let k = document.querySelector("span#kaisu");
  k.textContent=kaisu;
  console.log(k);

  let a = document.querySelector("span#answer");
  a.textContent = yoso;

  let r = document.querySelector("p#result");
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  kaisu ++;
  console.log(kaisu+"回目の予想: "+yoso);
  if (kaisu>=3){
    r.textContent = "答えは"+ kotae +"でした. すでにゲームは終わっています";
    console.log(r.textContent);
    return;
  }
  if (yoso == kotae) {
    r.textContent = "正解です. おめでとう!"
    console.log(r.textContent);
    kaisu += 3;
    return;
  }
  if (kotae < yoso) {
    r.textContent = "まちがい. 答えはもっと小さいですよ";
    console.log(r.textContent);
  } else {
    r.textContent = "まちがい. 答えはもっと大きいですよ";
    console.log(r.textContent);
  }
  
  // 課題3-1における出力先はコンソール
}