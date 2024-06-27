//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let n1 = document.createElement("p");
n1.textContent = "写真表と年の緯度経度のページです";
n1.style.textEmphasis = "sesame green";
let ex42 = document.querySelector('h2#ex42');    
ex42.insertAdjacentElement('afterEnd', n1);  

// 練習4-3 写真表作成プログラム
let ex43 = document.querySelector('div#phototable');    
for(let e of ["hanako.png", "jiro.png", "taro.png"]) {
	let i = document.createElement("img");
	i.setAttribute("src", e);
	let p = document.createElement("p");
	p.insertAdjacentElement('beforeEnd', i);
	ex43.insertAdjacentElement('beforeEnd', p);
}

// 練習4-4 箇条書き削除プログラム
for(let e of document.querySelectorAll("ul#location > li")){
	e.remove();
}

// 練習4-5 箇条書き追加プログラム
let ex45 = document.querySelector('ul#location');    
for(let e of data) {
	let l = document.createElement("li");
	l.textContent = e.name + '...' + '緯度'+e.lat+', 経度'+e.lng;
	ex45.insertAdjacentElement('beforeEnd', l);
}