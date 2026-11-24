// Membuat array berisi 5 nama mahasiswa
let mahasiswa = ["Andi", "Budi", "Citra", "Doni", "Eka"];

// Menampilkan semua nama mahasiswa
console.log("Daftar nama mahasiswa awal:");

for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

// Menambahkan nama baru menggunakan push()
mahasiswa.push("Fajar");

console.log("Setelah menambahkan nama:");

for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

// Menghapus nama pertama menggunakan shift()
mahasiswa.shift();

console.log("Setelah menghapus nama pertama:");

for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}