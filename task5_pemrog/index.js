// Mengimpor keempat modul
const getMahasiswa = require("./mahasiswa");
const hitungRataRata = require("./nilai");
const cekKelulusan = require("./status");
const tampilkanInformasi = require("./informasi");

// Mengambil data mahasiswa
let mahasiswa = getMahasiswa();

// Data nilai masing-masing mahasiswa
let daftarNilai = [
    [80, 85, 90],
    [70, 75, 80],
    [50, 55, 60]
];

// Menampilkan hasil pengolahan data
console.log("===== DATA NILAI MAHASISWA =====");

for (let i = 0; i < mahasiswa.length; i++) {
    let rataRata = hitungRataRata(daftarNilai[i]);
    let status = cekKelulusan(rataRata);

    tampilkanInformasi(mahasiswa[i], rataRata, status);
}