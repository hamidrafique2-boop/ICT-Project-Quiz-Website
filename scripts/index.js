function startQuiz(topic) {
    localStorage.setItem("quizTopic", topic);
    window.location.href = "quiz.html";
}

document.addEventListener('DOMContentLoaded', () => {
    // Add entry animation delays for cards
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
