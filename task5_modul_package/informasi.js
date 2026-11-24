// Fungsi menampilkan informasi mahasiswa
function tampilkanInformasi(mahasiswa, rataRata, status) {
    console.log("Nama:", mahasiswa.nama);
    console.log("NIM:", mahasiswa.nim);
    console.log("Nilai Rata-rata:", rataRata);
    console.log("Status:", status);
    console.log("----------------------");
}

module.exports = tampilkanInformasi;