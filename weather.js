////////// 課題3-2 ここからプログラムを書こう
let d = document.querySelector("div#result");

function print(data){
  ////////// 課題4-2
  let u = document.createElement("ul");
  d.insertAdjacentElement("beforeEnd", u);

  let l = document.createElement("li");
  u.insertAdjacentElement("beforeEnd", l);

  d.insertAdjacentElement("beforeEnd", u);
  let h = document.createElement("h3");
  h.textContent = "都市名: "+ data.name;
  l.insertAdjacentElement("beforeEnd", h);

  let p = document.createElement("p");
  p.textContent = "天気: "+ data.weather[0].description;
  l.insertAdjacentElement("beforeEnd", p);

  p = document.createElement("p");
  p.textContent = "最高気温: "+ data.main.temp_max;
  l.insertAdjacentElement("beforeEnd", p);

  p = document.createElement("p");
  p.textContent = "最低気温: "+ data.main.temp_min;
  l.insertAdjacentElement("beforeEnd", p);

  p = document.createElement("p");
  p.textContent = "湿度: "+ data.main.humidity;
  l.insertAdjacentElement("beforeEnd", p);
}

// イベント
document.querySelector("button#get_result").addEventListener("click", get_result);
function get_result() {
  if(d.childElementCount>0)document.querySelector("div#result > *").remove();
  let v = document.querySelector("input#search").value;
  let city_list    = ["カイロ","モスクワ","ヨハネスブルク","北京","東京","シンガポール","シドニー","ロンドン","パリ","リオデジャネイロ","ニューヨーク","ロサンゼルス"];
  let id_list      = [360630,524901,993800,1816670,1850147,1880252,2147714,2643743,2968815,3451189,5128581,5368361];

  for(let i=0; i<city_list.length; i++) {
    if (v==city_list[i]) {
      sendRequest(id_list[i]);
      return;
    }
  }
  let p = document.createElement("p");
  p.textContent = "一致する都市の情報が見つかりませんでした";
  d.insertAdjacentElement("beforeEnd", p);
}

// 通信を開始する処理
function sendRequest(id) {
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);
  print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
