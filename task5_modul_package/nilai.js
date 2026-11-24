// Fungsi menghitung nilai rata-rata
function hitungRataRata(nilai) {
    let total = 0;

    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }

    return total / nilai.length;
}

module.exports = hitungRataRata;