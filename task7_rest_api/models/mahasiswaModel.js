
let mahasiswa = [
    {
        id: 1,
        nim: "2026001",
        nama: "Andi Saputra",
        prodi: "Teknik Informatika"
    },
    {
        id: 2,
        nim: "2026002",
        nama: "Budi Santoso",
        prodi: "Sistem Informasi"
    }
];

// Mengambil semua data
const getAllMahasiswa = () => {
    return mahasiswa;
};

// Mengambil data berdasarkan ID
const getMahasiswaById = (id) => {
    return mahasiswa.find(m => m.id === id);
};

// Menambahkan data
const createMahasiswa = (data) => {
    const newMahasiswa = {
        id: mahasiswa.length > 0
            ? Math.max(...mahasiswa.map(m => m.id)) + 1
            : 1,
        nim: data.nim,
        nama: data.nama,
        prodi: data.prodi
    };

    mahasiswa.push(newMahasiswa);
    return newMahasiswa;
};

// Mengubah data
const updateMahasiswa = (id, data) => {
    const index = mahasiswa.findIndex(m => m.id === id);

    if (index === -1) return null;

    mahasiswa[index] = {
        ...mahasiswa[index],
        ...data,
        id: id
    };

    return mahasiswa[index];
};

// Menghapus data
const deleteMahasiswa = (id) => {
    const index = mahasiswa.findIndex(m => m.id === id);

    if (index === -1) return null;

    return mahasiswa.splice(index, 1)[0];
};

module.exports = {
    getAllMahasiswa,
    getMahasiswaById,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
};
