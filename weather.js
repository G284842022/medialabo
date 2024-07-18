let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
function print(data){
  console.log(`都市名: ${data.name}`);
  console.log(`都市名: ${data.weather[0].description}`);
  console.log(`最高気温: ${data.main.temp_max}`);
  console.log(`最低気温: ${data.main.temp_min}`);
  console.log(`湿度 ${data.main.humidity}`);

  ////////// 課題4-2
  let d = document.querySelector("div#result");
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
  p.textContent = "最低気温: "+ data.main.temp_max;
  l.insertAdjacentElement("beforeEnd", p);

  p = document.createElement("p");
  p.textContent = "最高気温: "+ data.main.temp_min;
  l.insertAdjacentElement("beforeEnd", p);

  p = document.createElement("p");
  p.textContent = "湿度: "+ data.main.humidity;
  l.insertAdjacentElement("beforeEnd", p);
}

// イベント
document.querySelector("button#get_result").addEventListener("click", get_result);
function get_result() {
console.log(document.querySelector("input#search").value);
}

print(data);
