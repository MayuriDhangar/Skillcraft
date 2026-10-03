let quiz = [
    {
        q: "What does HTML stand for?",
        o: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        a: "Hyper Text Markup Language"
    },
    {
        q: "Which is a programming language?",
        o: ["Python", "HTML", "CSS", "HTTP"],
        a: "Python"
    },
    {
        q: "Which is used for styling?",
        o: ["HTML", "CSS", "Java", "C++"],
        a: "CSS"
    },
    {
        q: "JavaScript is used for?",
        o: ["Styling", "Database", "Interactivity", "None"],
        a: "Interactivity"
    },
    {
        q: "Which is backend language?",
        o: ["PHP", "HTML", "CSS", "Bootstrap"],
        a: "PHP"
    },
    {
        q: "Which company developed Java?",
        o: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        a: "Sun Microsystems"
    },
    {
        q: "Which is not a programming language?",
        o: ["Python", "Java", "HTTP", "C++"],
        a: "HTTP"
    },
    {
        q: "Which language runs in browser?",
        o: ["Java", "C", "JavaScript", "Python"],
        a: "JavaScript"
    },
    {
        q: "CSS stands for?",
        o: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "None"],
        a: "Cascading Style Sheets"
    },
    {
        q: "Which is used for database?",
        o: ["SQL", "HTML", "CSS", "JS"],
        a: "SQL"
    }
];

let index = 0;
let score = 0;

function loadQuestion() {
    let q = quiz[index];
    document.getElementById("question").innerText = q.q;

    let html = "";
    q.o.forEach(opt => {
        html += `
        <label class="option">
            <input type="radio" name="ans" value="${opt}"> ${opt}
        </label>`;
    });

    document.getElementById("options").innerHTML = html;
}

function submitAnswer() {
    let selected = document.querySelector('input[name="ans"]:checked');

    if (!selected) {
        alert("Please select an answer");
        return;
    }

    if (selected.value === quiz[index].a) {
        score++;
    }

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quizBox").innerHTML = `
            <h2>Quiz Completed 🎉</h2>
            <p>Your Score: ${score}/${quiz.length}</p>
            <button onclick="location.reload()">Restart</button>
        `;
    }
}

loadQuestion();