function showResult() {
    const s = localStorage.getItem("quizScore");
    if (s === null) return;

    document.getElementById("score-display").innerText = `${s} / 10`;

    const msg = document.getElementById("performance-msg");
    const numScore = parseInt(s);

    if (numScore >= 8) {
        msg.className = "badge excellent";
        msg.innerText = "Excellent! Outstanding performance.";
    } else if (numScore >= 5) {
        msg.className = "badge good";
        msg.innerText = "Good Job! Keep practicing.";
    } else {
        msg.className = "badge needs-improvement";
        msg.innerText = "Needs Improvement. Don't give up!";
    }
}

document.addEventListener('DOMContentLoaded', showResult);
