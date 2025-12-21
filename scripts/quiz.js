let currentTopic = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

function loadQuiz() {
    currentTopic = localStorage.getItem("quizTopic");
    if (!currentTopic) {
        alert("Invalid topic. Going Home.");
        window.location.href = "../index.html";
        return;
    }

    const topicNames = {
        "pf": "Programming (C++)",
        "dm": "Discrete Math",
        "ict": "ICT",
        "cyber": "Cyber Security",
        "english": "Functional English",
        "islamic": "Islamic Studies"
    };
    document.getElementById("topic-display").innerText = topicNames[currentTopic] || "Quiz";
    document.body.classList.add(currentTopic);

    loadQuestionsFromDB();
}

function loadQuestionsFromDB() {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "flex";

    setTimeout(() => {
        let pool = questionsDB[currentTopic] || questionsDB["pf"];
        let shuffledPool = [...pool];
        shuffleArray(shuffledPool);
        currentQuestions = shuffledPool.slice(0, 10);
        if (loading) loading.style.display = "none";

        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
        updateProgressBar();
    }, 500);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.innerText = `${timeLeft}s`;
    timerDisplay.style.color = "#ef4444";

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            autoSkip();
        }
    }, 1000);
}

function autoSkip() {
    const allBtns = document.querySelectorAll(".option-btn");
    allBtns.forEach(b => b.disabled = true);

    // Highlight correct answer even if skipped
    const q = currentQuestions[currentQuestionIndex];
    allBtns[q.correct].classList.add("correct");

    document.getElementById("next-btn").style.display = "block";

    // Automatically transition to next question after 2 seconds
    setTimeout(() => {
        // Only trigger if we are still on the same question (to avoid double jumping)
        // Check if currentQuestionIndex is still the same and next-btn is visible
        if (document.getElementById("next-btn").style.display === "block") {
            nextQuestion();
        }
    }, 2000);
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    if (!q) return;

    document.getElementById("question-count").innerText = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById("question-text").innerText = q.question;

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, btn);
        container.appendChild(btn);
    });

    document.getElementById("next-btn").style.display = "none";
    startTimer();
}

function checkAnswer(selectedIdx, btnElement) {
    clearInterval(timer);
    const q = currentQuestions[currentQuestionIndex];
    const correctIdx = q.correct;
    const allBtns = document.querySelectorAll(".option-btn");

    allBtns.forEach(b => b.disabled = true);

    if (selectedIdx === correctIdx) {
        btnElement.classList.add("correct");
        score++;
    } else {
        btnElement.classList.add("wrong");
        allBtns[correctIdx].classList.add("correct");
    }

    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
        updateProgressBar();
    } else {
        finishQuiz();
    }
}

function updateProgressBar() {
    const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
}

function finishQuiz() {
    clearInterval(timer);
    localStorage.setItem("quizScore", score);
    saveQuizHistory(currentTopic, score);
    window.location.href = "result.html";
}

function cancelQuiz() {
    clearInterval(timer);
    window.location.href = "../index.html";
}

function saveQuizHistory(topic, score) {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    const date = new Date().toLocaleString();
    const headers = {
        "pf": "PF (C++)",
        "dm": "Discrete Math",
        "ict": "ICT",
        "cyber": "Cyber Security",
        "english": "Functional English",
        "islamic": "Islamic Studies"
    };

    history.push({
        topic: headers[topic] || topic,
        score: score,
        date: date
    });

    localStorage.setItem("quizHistory", JSON.stringify(history));
}

document.addEventListener('DOMContentLoaded', loadQuiz);
