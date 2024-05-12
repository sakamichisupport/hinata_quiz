const app = Vue.createApp({
  data() {
    return {
      quizStarted: false,
      quizFinished: false,
      currentQuestionIndex: 0,
      correctAnswers: 0,
      questions: [
        { id: 1, question: "小坂菜緒のあだ名、こさかなを命名したのは誰？", options: ["富田鈴花", "金村美玖", "佐々木久美", "河田陽菜"], answer: "佐々木久美" },
        { id: 2, question: "次の四期生の中でぶりっ子キャラは？", options: ["山下葉留花", "宮地すみれ", "渡辺莉奈", "藤嶌果歩"], answer: "宮地すみれ" },
        { id: 3, question: "森本茉莉に付けられたことのないあだ名は次のうちどれ？", options: ["ピンマイク", "アイツ", "まりもと", "オマエ"], answer: "オマエ" },
        { id: 4, question: "山口陽世の家に連れ込まれたことのないメンバーは？", options: ["小坂菜緒", "平岡海月", "山下葉留花", "佐々木美玲"], answer: "佐々木美玲" },
        { id: 5, question: "富田鈴花が買った車は次のうちどれ？", options: ["アルト", "スペーシア", "ジムニーシエラ", "ランボルギーニ・ウラカン"], answer: "ジムニーシエラ" },
        { id: 6, question: "2024年1月8日OAの日向坂で会いましょうつかもうぜ！！ 軍団対抗ドラゴンガールバトル！！ 前半で河田陽菜が盗み食いしたものは？", options: ["カニ", "エビ", "タイ", "ホタテ"], answer: "カニ" },
        { id: 7, question: "2023年12月27日のSHOWROOMにて富田鈴花は最近お気に入りの四期生がいると発言したが誰のことを言っていたか？", options: ["正源司陽子", "石塚瑶季", "小西夏菜実", "渡辺莉奈"], answer: "小西夏菜実" },
        { id: 8, question: "2024年5月現在四期生で身長157.5cmは3人いるが、次の4人で当てはまらないメンバーは？", options: ["平岡海月", "藤嶌果歩", "正源司陽子", "平尾帆夏"], answer: "藤嶌果歩" },
        { id: 9, question: "次のメンバーでおとめ座でないのは誰？", options: ["濱岸ひより", "金村美玖", "小坂菜緒", "高瀬愛奈"], answer: "濱岸ひより" },
        { id: 10, question: "山下葉留花はオーダーメイドの枕を買いに行った時スリッパ、キッチンマット、まっくレスともう一つ何がついてくると言っていたか？", options: ["揺れないハンモック", "明るいカーテン", "置けないクッション", "抱けない抱き枕"], answer: "抱けない抱き枕" },
      ],
      userAnswers: []
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    startQuiz() {
      this.quizStarted = true;
    },
    answerQuestion(option) {
      this.userAnswers.push(option);
      if (option === this.currentQuestion.answer) {
        this.correctAnswers++;
      }
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.quizFinished = true;
      }
    },
    restartQuiz() {
      this.quizStarted = false;
      this.quizFinished = false;
      this.currentQuestionIndex = 0;
      this.correctAnswers = 0;
      this.userAnswers = [];
    }
  }
});

app.mount('#app');