const answersList = document.querySelectorAll("ol.answers li");

answersList.forEach(li => li.addEventListener("click", checkClickedAnswer));

//正しい答え
const correctAnswers = {
    question1: "D",
    question2: "B",
    question3: "D",
    question4: "C",
};
correctAnswers["question1"];

function checkClickedAnswer(event) {
    //クリックされた答えの要素(liタグ)
    const clickedAnswerElement = event.currentTarget;
    console.log();
    //選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest("ol.answers").dataset.id;
    //正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];
    // メッセージを入れる変数を用意
    let message;
    // カラーコードを入れる変数を用意
    let answerColorCode; 

    //答えが正しいか判定
    if(selectedAnswer === correctAnswer) {
        //正しい答えだった時
        message = "正解です！おめでとう🥳🎉";
        answerColorCode = "" ;
    }else{
    //間違った答えだった時
        message = "ざんねん！不正解です😂";
        answerColorCode = "#f05959" ;
    }

    alert(message);


    //答え全体を表示
    document.querySelector("div#section-correct-answer").style.display = "block";

    //文字の色を変える（答えが間違っていた時だけ色が変わる）
    document.querySelector("span#corrct-answer").style.color = answerColorCode;

}
