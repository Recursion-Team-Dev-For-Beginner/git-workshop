let commentArray = [
  "リファクタリングが成功してProgrammingが爆速に!!サクサク動いて気持ちいいーー!!",
  "新しいPCをゲットし作業効率が爆上がり!!",
  "難しい案件をクリアすることができた！自分に実力がついてきていることを実感し、自信を持つことができるでしょう！",
  "悩んでたエラーが解決してとてもいい気分！",
  "新しいプロジェクトにアサインされるも、上司がきつい・・・",
  "職場で取り返しの付かないミス連発! おまけにPCの調子も悪い・・・",
];

function selectRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
let randomIndex = selectRandomIndex(commentArray);

let omikujiComment = document.getElementById("comment");
omikujiComment.innerHTML = commentArray[randomIndex];
