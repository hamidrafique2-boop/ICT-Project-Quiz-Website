function loadHistory() {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    const tbody = document.getElementById("history-body");

    if (!tbody) return;

    if (history.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>No quizzes attempted yet.</td></tr>";
        return;
    }

    tbody.innerHTML = "";
    [...history].reverse().forEach(item => {
        const row = `<tr><td>${item.topic}</td><td>${item.score} / 10</td><td>${item.date}</td></tr>`;
        tbody.innerHTML += row;
    });
}

function clearHistory() {
    if (confirm("Clear history?")) {
        localStorage.removeItem("quizHistory");
        loadHistory();
    }
}

document.addEventListener('DOMContentLoaded', loadHistory);
