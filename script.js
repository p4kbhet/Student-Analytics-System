const students = [
    {
        name: "John",
        scores: [80, 90, 75, 92, 88]
    },
    {
        name: "Alice",
        scores: [95, 87, 78, 94, 82]
    },
    {
        name: "Mark",
        scores: [87, 93, 83, 89, 84]
    }
];

function calculateAverage(students) {
    const outputDiv = document.getElementById('analyticsOutput');

    for (const student of students) {
        const averageScore = calculateAverageScore(student.scores);
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<span>${student.name}:</span> ${averageScore.toFixed(1)}`;
        outputDiv.appendChild(paragraph);
    }

    const highestAverageStudents = findHighestAverageStudents(students);
    const highestScoreNames = highestAverageStudents.map(student => student.name).join(', ');
    const bonusParagraph = document.createElement('p');
    bonusParagraph.innerHTML = `<span>${highestScoreNames}</span> has the highest average score.`;
    outputDiv.appendChild(bonusParagraph);
}

function calculateAverageScore(scores) {
    const total = scores.reduce((total, score) => total + score, 0);
    return total / scores.length;
}

function findHighestAverageStudents(students) {
    let highestAverage = -1;
    let highestAverageStudents = [];

    for (const student of students) {
        const averageScore = calculateAverageScore(student.scores);
        if (averageScore > highestAverage) {
            highestAverage = averageScore;
            highestAverageStudents = [student];
        } else if (averageScore === highestAverage) {
            highestAverageStudents.push(student);
        }
    }

    return highestAverageStudents;
}

calculateAverage(students);
