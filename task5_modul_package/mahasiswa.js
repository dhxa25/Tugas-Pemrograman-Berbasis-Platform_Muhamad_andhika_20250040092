// Data mahasiswa
let dataMahasiswa = [
    {
        nama: "Andi",
        nim: "20250040001"
    },
    {
        nama: "Budi",
        nim: "20250040002"
    },
    {
        nama: "Citra",
        nim: "20250040003"
    }
];

// Fungsi untuk mengambil data mahasiswa
function getMahasiswa() {
    return dataMahasiswa;
}

// Mengirim fungsi agar bisa digunakan file lain
module.exports = getMahasiswa;