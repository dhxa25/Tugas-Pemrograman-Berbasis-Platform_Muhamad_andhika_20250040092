let studentsScore = [
    {
        name: "Andi",
        score: 90
    },
    {
        name: "Rudi",
        score: 80
    },
    {
        name: "Dira",
        score: 100
    }
];

// Mencari siswa dengan nilai terbesar
let highestStudent = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > highestStudent.score) {
        highestStudent = studentsScore[i];
    }
}

// Menampilkan hasil
console.log("Siswa dengan nilai tertinggi:");
console.log("Nama:", highestStudent.name);
console.log("Nilai:", highestStudent.score);