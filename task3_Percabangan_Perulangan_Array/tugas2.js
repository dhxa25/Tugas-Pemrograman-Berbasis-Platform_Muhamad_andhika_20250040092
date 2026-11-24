// Menggunakan perulangan FOR
console.log("Bilangan ganjil menggunakan FOR:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Menggunakan perulangan WHILE
console.log("Bilangan ganjil menggunakan WHILE:");

let angka = 1;

while (angka <= 20) {
    if (angka % 2 !== 0) {
        console.log(angka);
    }
    angka++;
}