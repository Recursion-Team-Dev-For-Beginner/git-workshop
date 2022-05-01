const omikujiArray = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"];
const srcArray = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEgi8IFwR7VoUtQIBHY5U5UueeRusSawWoAD3njzwc7gR-gFyFlzPafCOHmZ7jrBxAVn2AVHWmPL8sxlm0cnxeVZbtr6zJzrEZPGLSbY4ceSaPw15CalNXNx9tk3hBtV3KFGe8CNloo0Kd-M-WI1KjJjfVGDvo3nPH-UJj6n3_9g7OhJZha8uKL6H2kpPg=s911",
  "https://blogger.googleusercontent.com/img/a/AVvXsEjcHq0ogY9KZ5gPt8LVyZCiR6j1z3jBcMQq_WkHOGi3bpYjG0r4zXUBgNkL6A5tg-LRzCO5MYwOUMAKjQuCp1LXQQKJswodgXe8HaWVWzJy5XTxpcoZvOcpyu-Cc2MfJFSFs2B6yBCYx3hqcea4Aam7xslfUJ9qTJ4eqK5NXinFF1c1fXnXfqKVnCp2hg=s883",
  "https://1.bp.blogspot.com/-7pmF959ysUY/XNE_EDoyYDI/AAAAAAABSuQ/Q1C0pUgPGmIelMm8ce51M4x--wRa9xICwCLcBGAs/s800/hyoujou_text_man_nikoniko.png",
  "https://1.bp.blogspot.com/-8oGgOpL1TYM/WBsAzs26wYI/AAAAAAAA_WA/SNJuSSDbXAYdXhRAiB7crxXm5tkOBE9HQCLcB/s800/pose_kiri_woman.png",
  "https://2.bp.blogspot.com/-RxPE2LMSqpA/VCOJsx1yyaI/AAAAAAAAm1U/KCs9MCO3nXw/s800/hansei_koukai_woman.png",
  "https://4.bp.blogspot.com/-O6jzGm6q7ek/Wp94Z1gZwvI/AAAAAAABKtI/mfCgerRAaB4YuHBl-OdNLKKN6nqI7MYFACLcBGAs/s800/pose_taiiku_suwari_back_man.png",
];
let languageArray = ["C++", "C#", "Go", "JavaScript", "Java", "Python"];
let databaseArray = [
  "PostgreSQL",
  "MySQL",
  "Oracle Database",
  "MongoDB",
  "SQLite",
  "MariaDB",
];
let editorArray = ["VScode", "Atom", "Emacs", "Vim", "Sublime Text 3", "xyzzy"];

//おみくじのインデックスを決めます
function selectRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
const randomIndex = selectRandomIndex(omikujiArray);

//それぞれの要素に配列から代入します
let omikujiImg = document.getElementById("img");
omikujiImg.src = srcArray[randomIndex];

let h1Omikuji = document.getElementById("h1-omikuji");
h1Omikuji.innerHTML = omikujiArray[randomIndex];

let language = document.getElementById("language");
language.innerHTML = languageArray[randomIndex];

let database = document.getElementById("database");
database.innerHTML = databaseArray[randomIndex];

let editor = document.getElementById("editor");
editor.innerHTML = editorArray[randomIndex];
//中吉以上ときのアニメーション
if (randomIndex < 3) {
  let omikujiBody = document.getElementById("omikuji-body");
  let randomScript1 = document.createElement("script");
  omikujiBody.append(randomScript1);
  randomScript1.type = "text/javascript";
  randomScript1.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js";

  window.onload = function () {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6,
      },
    });
    setInterval(function () {
      requestAnimationFrame(confetti);
    }, 1000);
  };
}

//小吉以下ときのアニメーション
if (randomIndex >= 3) {
  let omikujiBody = document.getElementById("omikuji-body");
  let randomScript1 = document.createElement("script");
  let createCanvas = document.createElement("canvas");
  let randomScript2 = document.createElement("script");
  omikujiBody.append(randomScript1);
  omikujiBody.append(createCanvas);
  omikujiBody.append(randomScript2);

  randomScript1.type = "text/javascript";
  randomScript1.src = "raindrops.js";
  createCanvas.classList.add("background");
  randomScript2.src =
    "https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js";
}
