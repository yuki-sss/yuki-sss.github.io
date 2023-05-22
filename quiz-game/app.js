window.addEventListener("load", function () {
  let bgm = document.getElementById("bgm");
  bgm.volume = 0.3;
  bgm.play();
  bgm.loop = true;
});

const quiz = [
  {
    question: "Q1 ブラウザで前のページに戻るには？",
    answers: ["Command + [", "Command + Q", "Command + Y", "Command + K"],
    correct: "Command + [",
  },
  {
    question: "アプリケーションを閉じるためには？",
    answers: ["Command + Y", "Command + K", "Command + Q", "Command + M"],
    correct: "Command + Q",
  },
  {
    question: "ウィンドウを最小化するには？",
    answers: ["Command + K", "Command + Y", "Command + M", "Command + Q"],
    correct: "Command + M",
  },
  {
    question: "履歴ページを開くには？",
    answers: ["Command + Q", "Command + Y", "Command + K", "Command + M"],
    correct: "Command + Y",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文。選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// 10秒後にアラート
setTimeout(function () {
  window.alert("10秒経過。");
}, 10000);

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数があればこちらを実行
    setupQuiz();
    clearTimeout(timeoutId);
  } else {
    //問題数がなければこちらを実行
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
    location.reload(true);
  }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].textContent = quiz[quizIndex].answers[handleIndex];
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
