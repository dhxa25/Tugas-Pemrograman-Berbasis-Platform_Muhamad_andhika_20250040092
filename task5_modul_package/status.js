// Fungsi menentukan status kelulusan
function cekKelulusan(nilai) {
    if (nilai >= 60) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

module.exports = cekKelulusan;