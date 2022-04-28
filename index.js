let omikujiArray = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"];
let srcArray = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEgi8IFwR7VoUtQIBHY5U5UueeRusSawWoAD3njzwc7gR-gFyFlzPafCOHmZ7jrBxAVn2AVHWmPL8sxlm0cnxeVZbtr6zJzrEZPGLSbY4ceSaPw15CalNXNx9tk3hBtV3KFGe8CNloo0Kd-M-WI1KjJjfVGDvo3nPH-UJj6n3_9g7OhJZha8uKL6H2kpPg=s911",
  "https://blogger.googleusercontent.com/img/a/AVvXsEjcHq0ogY9KZ5gPt8LVyZCiR6j1z3jBcMQq_WkHOGi3bpYjG0r4zXUBgNkL6A5tg-LRzCO5MYwOUMAKjQuCp1LXQQKJswodgXe8HaWVWzJy5XTxpcoZvOcpyu-Cc2MfJFSFs2B6yBCYx3hqcea4Aam7xslfUJ9qTJ4eqK5NXinFF1c1fXnXfqKVnCp2hg=s883",
  "https://1.bp.blogspot.com/-7pmF959ysUY/XNE_EDoyYDI/AAAAAAABSuQ/Q1C0pUgPGmIelMm8ce51M4x--wRa9xICwCLcBGAs/s800/hyoujou_text_man_nikoniko.png",
  "https://1.bp.blogspot.com/-8oGgOpL1TYM/WBsAzs26wYI/AAAAAAAA_WA/SNJuSSDbXAYdXhRAiB7crxXm5tkOBE9HQCLcB/s800/pose_kiri_woman.png",
  "https://2.bp.blogspot.com/-RxPE2LMSqpA/VCOJsx1yyaI/AAAAAAAAm1U/KCs9MCO3nXw/s800/hansei_koukai_woman.png",
  "https://4.bp.blogspot.com/-O6jzGm6q7ek/Wp94Z1gZwvI/AAAAAAABKtI/mfCgerRAaB4YuHBl-OdNLKKN6nqI7MYFACLcBGAs/s800/pose_taiiku_suwari_back_man.png",
];

//おみくじのインデックスを決めます
function selectRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
let randomIndex = selectRandomIndex(omikujiArray);

//それぞれの要素に配列から代入します
let omikujiImg = document.getElementById("img");
omikujiImg.src = srcArray[randomIndex];

let h1Omikuji = document.getElementById("h1-omikuji");
h1Omikuji.innerHTML = omikujiArray[randomIndex];
