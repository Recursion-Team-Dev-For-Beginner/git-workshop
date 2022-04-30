let omikujiArray = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"];
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

let randomIndex = selectRandomIndex(omikujiArray);

//それぞれの要素に配列から代入します
let language = document.getElementById("language");
language.innerHTML = languageArray[randomIndex];

let database = document.getElementById("database");
database.innerHTML = databaseArray[randomIndex];

let editor = document.getElementById("editor");
editor.innerHTML = editorArray[randomIndex];
